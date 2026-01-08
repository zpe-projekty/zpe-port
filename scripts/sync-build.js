const { rm, mkdir, readdir, copyFile, stat } = require("fs/promises");
const path = require("path");
const term = require("./terminal-control").init();

const SOURCE = path.resolve("./build");
const TARGET = path.resolve("./example/zpe-port/packages/zpe-port/build");

// ---------- utils ----------
async function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function countFiles(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
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
    const stats = await stat(src);

    if (stats.isDirectory()) {
        await mkdir(dest, { recursive: true });
        const entries = await readdir(src);

        for (const entry of entries) {
            await copyRecursive(path.join(src, entry), path.join(dest, entry));
        }
    } else {
        await copyFile(src, dest);
        copied++;

        // term.saveCursor();

        renderProgress(copied, totalFiles);

        // const relSrc = path.relative(process.cwd(), src);
        // const relDest = path.relative(process.cwd(), dest);
        // process.stdout.write(`\n📄 ${relSrc} → ${relDest}\r`);

        // term.restoreCursor();

        await wait(10);
    }
}

// ---------- main ----------

async function main() {
    try {
        console.log(`🧹 Usuwam: ${TARGET}`);
        await rm(TARGET, { recursive: true, force: true });

        console.log(`📁 Tworzę: ${TARGET}`);
        await mkdir(TARGET, { recursive: true });

        console.log("🔍 Liczę pliki...");
        totalFiles = await countFiles(SOURCE);
        console.log(`📦 Do skopiowania: ${totalFiles} plików\n`);

        await copyRecursive(SOURCE, TARGET);

        console.log("\n\n✅ Kopiowanie zakończone");
    } catch (err) {
        console.error("\n❌ Błąd:", err);
        process.exit(1);
    }
}

main();
