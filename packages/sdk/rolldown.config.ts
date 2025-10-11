import { defineConfig } from 'rolldown';
import { dts } from 'rolldown-plugin-dts'
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

fs.rmSync(path.resolve(__dirname, 'dist'), {
    recursive: true,
    force: true
});

export default defineConfig({
  input: 'src/index.ts',
  plugins: [dts()],
  output: [{ dir: 'dist', format: 'es' }],
});
