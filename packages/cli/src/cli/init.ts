import inquirer from 'inquirer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templates = path.resolve(__dirname, '../templates');

function renameFilesRecursively(dir: string, modName: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const oldPath = path.join(dir, entry.name);
        let newPath = oldPath;

        // Rename file or folder if it includes {name}
        if (entry.name.includes('{name}')) {
            const newName = entry.name.replace('{name}', modName);
            newPath = path.join(dir, newName);
            fs.renameSync(oldPath, newPath);
        }

        // If it's a package.json, rewrite the "name" field
        if (entry.name === 'package.json') {
            const pkg = JSON.parse(fs.readFileSync(newPath, 'utf-8'));
            pkg.name = modName;
            fs.writeFileSync(newPath, JSON.stringify(pkg, null, 2));
        }

        // Recurse into directories (using the new name if renamed)
        if (fs.statSync(newPath).isDirectory()) {
            renameFilesRecursively(newPath, modName);
        }
    }
}

export async function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'mod_name',
                message: "What's your mod's name",
                validate: ((value: string) => {
                    if (value.trim() === '') return 'Please provide a value';
                    return true;
                })
            },
            {
                type: 'list',
                name: 'template',
                message: "Which template should be used",
                choices: ['Basic', 'AcePursuit', 'BombSquad', 'Exfil', 'Vertigo'],
            },
        ])
        .then((answers) => {
            const template = path.resolve(templates, answers.template);
            const newProject = path.resolve('.', answers.mod_name);

            fs.cpSync(template, newProject, { recursive: true });
            fs.cpSync(path.resolve(templates, 'All'), newProject, { recursive: true })

            renameFilesRecursively(newProject, answers.mod_name);
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });

}
