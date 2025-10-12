import { defineConfig } from 'tsup'
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, 'dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, {
    recursive: true
});

fs.cpSync(path.resolve(__dirname, 'resources'), distDir, {
    recursive: true,
    force: true
});


export default defineConfig({
    entry: ['src/index.ts', 'src/cli/index.ts'],
    sourcemap: true,
    clean: true,
    dts: true,
    bundle: true,
    format: 'esm',
})
