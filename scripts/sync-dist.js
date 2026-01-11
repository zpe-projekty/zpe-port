const fs = require("fs/promises");
const path = require("path");
const term = require("./terminal-control").init();

const SOURCE = path.resolve("./dist");
const TARGET = path.resolve("./example/packages/zpe-port/dist");

// ---------- utils ----------
async function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function copyPackageJson(src, dest) {
    // Wczytaj źródłowy package.json
    const content = await fs.readFile(src, "utf8");
    const json = JSON.parse(content);

    // Klucze, które zostawiamy
    const allowedKeys = [
        "name",
        "version",
        "description",
        "main",
        "types",
        "module"
    ];

    // Zbuduj nowy obiekt tylko z wybranymi polami (jeśli istnieją)
    const filtered = {};
    for (const key of allowedKeys) {
        if (json[key] !== undefined) {
            filtered[key] = json[key];
        }
    }

    // Upewnij się, że katalog docelowy istnieje
    const destDir = path.dirname(dest);
    await fs.mkdir(destDir, { recursive: true });

    // Zapisz nowy package.json (nadpisuje, jeśli istnieje)
    await fs.writeFile(dest, JSON.stringify(filtered, null, 2) + "\n", "utf8");
}

async function countFiles(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    let count = 0;

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            count += await countFiles(fullPath);
        } else {
            count += 1;
        }
    }
    return count;
}

function renderProgress(current, total, width = 30) {
    const percent = Math.floor((current / total) * 100);
    const filled = Math.floor((current / total) * width);
    const bar = "█".repeat(filled) + "░".repeat(width - filled);

    process.stdout.write(`\r📊 [${bar}] ${percent}% (${current}/${total})`);
}

// ---------- copy ----------

let copied = 0;
let totalFiles = 0;

async function copyRecursive(src, dest) {
    const stats = await fs.stat(src);

    if (stats.isDirectory()) {
        await fs.mkdir(dest, { recursive: true });
        const entries = await fs.readdir(src);

        for (const entry of entries) {
            await copyRecursive(path.join(src, entry), path.join(dest, entry));
        }
    } else {
        await fs.copyFile(src, dest);
        copied++;

        // term.saveCursor();

        renderProgress(copied, totalFiles);

        // const relSrc = path.relative(process.cwd(), src);
        // const relDest = path.relative(process.cwd(), dest);
        // process.stdout.write(`\n📄 ${relSrc} → ${relDest}\n`);

        // term.restoreCursor();

        await wait(10);
    }
}

// ---------- main ----------

async function main() {
    try {
        console.log(`🧹 Usuwam: ${TARGET}`);
        await fs.rm(TARGET, { recursive: true, force: true });

        console.log(`📁 Tworzę: ${TARGET}`);
        await fs.mkdir(TARGET, { recursive: true });

        console.log("🔍 Liczę pliki...");
        totalFiles = await countFiles(SOURCE);
        console.log(`📦 Do skopiowania: ${totalFiles} plików\n`);

        await copyRecursive(SOURCE, TARGET);

        await copyPackageJson(
            path.resolve("./package.json"),
            path.join(TARGET, "../package.json")
        );

        console.log("\n\n✅ Kopiowanie zakończone");
    } catch (err) {
        console.error("\n❌ Błąd:", err);
        process.exit(1);
    }
}

main();
