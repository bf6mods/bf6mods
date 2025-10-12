import path from "path";
import { fileURLToPath } from "url";
import fs from 'fs';
import { genExport } from "knitwork";
import * as colors from 'colors'
import { printToConsole } from "./utils.js";

export async function prepare() {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        const workingDir = path.resolve('.');
        const buildDir = path.resolve('.bf6');

        const resources = path.resolve(__dirname, '../../resources/prepare');

        fs.cpSync(path.resolve(resources, 'tsconfig.json'), path.resolve(buildDir, 'tsconfig.json'));
        fs.cpSync(path.resolve(resources, 'bf6.d.ts'), path.resolve(buildDir, 'bf6.d.ts'));
        fs.cpSync(path.resolve(resources, 'types', 'config.ts'), path.resolve(buildDir, 'types', 'config.ts'));

        const ConfigFileExports = genExport('./types/config', ['defineBf6Config']);
        fs.writeFileSync(path.resolve(buildDir, 'imports.d.ts'), `${ConfigFileExports}\n`);

        printToConsole(`${'✔'.green} Types generated in .bf6`)
    } catch (error) {
		console.error(error)
		printToConsole(`${'✗'.red} Types failed to generate in .bf6`)
	}
}
