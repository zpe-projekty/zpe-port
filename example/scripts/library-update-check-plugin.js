"use strict";

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");
const http = require("http");
const https = require("https");
const { URL } = require("url");

class LibraryUpdateCheckPlugin {
    constructor(options = {}) {
        this.options = {
            configFile: ".updaterc",
            checkIntervalHours: 24,
            timeoutMs: 5000,
            quiet: false,
            ...options
        };

        this._ranThisProcess = false;
        this._finalMessage = null;
    }

    apply(compiler) {
        const pluginName = "LibraryUpdateCheckPlugin";

        const runCheck = async () => {
            if (this._ranThisProcess) return;

            const context = compiler.context || process.cwd();
            const configPath = path.resolve(context, this.options.configFile);

            let config;
            try {
                const raw = await fsp.readFile(configPath, "utf8");
                config = JSON.parse(raw);
            } catch {
                return;
            }

            const {
                remotePackageJsonUrl,
                localPackageJsonPath,
                checkIntervalHours = this.options.checkIntervalHours,
                timeoutMs = this.options.timeoutMs
            } = config;

            if (!remotePackageJsonUrl || !localPackageJsonPath) return;

            const shouldCheck = await this._shouldCheckNow(
                configPath,
                checkIntervalHours
            );
            if (!shouldCheck) return;

            try {
                const localPkgPath = path.resolve(
                    context,
                    localPackageJsonPath
                );

                const [remotePkg, localPkg] = await Promise.all([
                    this._fetchJson(remotePackageJsonUrl, timeoutMs),
                    this._readJsonFile(localPkgPath)
                ]);

                const remoteVersion = remotePkg?.version;
                const localVersion = localPkg?.version;

                if (remoteVersion && localVersion) {
                    const cmp = compareSemver(remoteVersion, localVersion);

                    if (cmp > 0) {
                        this._finalMessage = `📦 \x1b[35mzpe-port update available: ${localVersion} → ${remoteVersion}\x1b[0m`;
                    } else {
                        this._finalMessage = `📦 \x1b[32mzpe-port up to date (${localVersion})\x1b[0m`;
                    }
                }
            } catch (err) {
                this._finalMessage = `📦 \x1b[31mzpe-port update check failed: ${err.message}\x1b[0m`;
            } finally {
                const now = new Date();
                await fsp.utimes(configPath, now, now).catch(() => {});
                this._ranThisProcess = true;
            }
        };

        compiler.hooks.beforeRun.tapPromise(pluginName, runCheck);
        compiler.hooks.watchRun.tapPromise(pluginName, runCheck);

        compiler.hooks.done.tap(pluginName, () => {
            if (this._finalMessage && !this.options.quiet) {
                setTimeout(() => {
                    // pusta linia dla czytelności
                    console.log("");
                    console.log(this._finalMessage);
                }, 500);
            }
        });
    }

    async _shouldCheckNow(configPath, intervalHours) {
        const stat = await fsp.stat(configPath);
        return Date.now() - stat.mtimeMs >= intervalHours * 60 * 60 * 1000;
    }

    async _readJsonFile(filePath) {
        return JSON.parse(await fsp.readFile(filePath, "utf8"));
    }

    _fetchJson(urlStr, timeoutMs) {
        return new Promise((resolve, reject) => {
            const url = new URL(urlStr);
            const lib = url.protocol === "https:" ? https : http;

            const req = lib.request(url, { timeout: timeoutMs }, (res) => {
                if (
                    res.statusCode >= 300 &&
                    res.statusCode < 400 &&
                    res.headers.location
                ) {
                    res.resume();
                    return resolve(
                        this._fetchJson(res.headers.location, timeoutMs)
                    );
                }

                if (res.statusCode !== 200) {
                    res.resume();
                    return reject(new Error(`HTTP ${res.statusCode}`));
                }

                let data = "";
                res.on("data", (c) => (data += c));
                res.on("end", () => {
                    try {
                        resolve(JSON.parse(data));
                    } catch (e) {
                        reject(e);
                    }
                });
            });

            req.on("error", reject);
            req.on("timeout", () => req.destroy(new Error("Timeout")));
            req.end();
        });
    }
}

/* ---- semver ---- */

function compareSemver(a, b) {
    const pa = parseSemver(a);
    const pb = parseSemver(b);
    for (let i = 0; i < 3; i++) {
        if (pa[i] > pb[i]) return 1;
        if (pa[i] < pb[i]) return -1;
    }
    return 0;
}

function parseSemver(v) {
    if (typeof v !== "string") return [0, 0, 0];
    const s = v.replace(/^v/, "").split(/[+-]/)[0];
    const p = s.split(".").map((n) => parseInt(n, 10) || 0);
    return [p[0] || 0, p[1] || 0, p[2] || 0];
}

module.exports = LibraryUpdateCheckPlugin;
