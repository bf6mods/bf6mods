import child_process from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import colors from "colors";
import inquirer from "inquirer";
import { printToConsole } from "./utils.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatesDir = path.resolve(__dirname, "../resources/templates");

function renameFilesRecursively(dir: string, modName: string) {
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	for (const entry of entries) {
		const oldPath = path.join(dir, entry.name);
		let newPath = oldPath;

		// Rename file or folder if it includes {name}
		if (entry.name.includes("{name}")) {
			const newName = entry.name.replace("{name}", modName);
			newPath = path.join(dir, newName);
			fs.renameSync(oldPath, newPath);
		}

		// If it's a package.json, rewrite the "name" field
		if (entry.name === "package.json") {
			const pkg = JSON.parse(fs.readFileSync(newPath, "utf-8"));
			pkg.name = modName;
			fs.writeFileSync(newPath, JSON.stringify(pkg, null, 2));
		}

		// Recurse into directories (using the new name if renamed)
		if (fs.statSync(newPath).isDirectory()) {
			renameFilesRecursively(newPath, modName);
		}
	}
}

export const templates = ["Basic", "AcePursuit", "BombSquad", "Exfil", "Vertigo"] as const;

export function startProject(destination: string, name: string, template: (typeof templates)[number] | "None") {
	if (template !== 'None') {
		const templateDir = path.resolve(templatesDir, template);		
		fs.cpSync(templateDir, destination, { recursive: true });
	}

	fs.cpSync(path.resolve(templatesDir, "All"), destination, {
		recursive: true,
	});

	renameFilesRecursively(destination, name);
}

export function installDependencies(projectDir: string) {
	printToConsole(`${colors.magenta("◐")} Installing dependencies...`);
	child_process.execSync(`npm install`, {
		stdio: "inherit",
		cwd: projectDir,
	});
}

export async function init() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "mod_name",
				message: "What's your mod's name",
				validate: (value: string) => {
					if (value.trim() === "") return "Please provide a value";
					return true;
				},
			},
			{
				type: "list",
				name: "template",
				message: "Which template should be used",
				choices: templates,
			},
		])
		.then((answers) => {
			const newProject = path.resolve(".", answers.mod_name);

			startProject(newProject, answers.mod_name, answers.template);
			installDependencies(newProject);
		})
		.catch((error) => {
			if (error.isTtyError) {
				console.error("TTY Error:", error);
			} else {
				console.error("Error occurred:", error);
			}
		});
}
