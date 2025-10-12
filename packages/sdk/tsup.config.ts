import { defineConfig } from 'tsup'
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const modFile = path.resolve(__dirname, './src/mod/index.d.ts');

export default defineConfig({
    entry: ['src/index.ts'],
    sourcemap: true,
    clean: true,
    minify: true,
    dts: {
        banner: `declare global {\n${fs.readFileSync(modFile, 'utf-8').replace('declare', '')}\n}`
    },
    format: 'esm',
})
