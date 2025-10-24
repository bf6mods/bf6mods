import child_process from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as prompts from "@clack/prompts";
import bf6SdkPackageJson from "../../../sdk/package.json" with { type: "json" };
import bf6CliPackageJson from "../../package.json" with { type: "json" };
import { importFile } from "./import.ts";

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

		// If it's a bf6.config.ts, replace the {bf6ConfigName} placeholder
		if (entry.name === "bf6.config.ts") {
			let content = fs.readFileSync(newPath, "utf-8");
			content = content.replace(/{bf6ConfigName}/g, modName);
			fs.writeFileSync(newPath, content, "utf-8");
		}

		// If it's a package.json, rewrite the "name" field
		if (entry.name === "package.json") {
			const pkg = JSON.parse(fs.readFileSync(newPath, "utf-8"));
			pkg.name = modName;
			if (!pkg.devDependencies) pkg.devDependencies = {};
			pkg.devDependencies["@bf6mods/cli"] = `^${bf6CliPackageJson.version}`;
			pkg.devDependencies["@bf6mods/sdk"] = `^${bf6SdkPackageJson.version}`;
			fs.writeFileSync(newPath, JSON.stringify(pkg, null, 2));
		}

		// Recurse into directories (using the new name if renamed)
		if (fs.statSync(newPath).isDirectory()) {
			renameFilesRecursively(newPath, modName);
		}
	}
}

export const templates = [
	"Basic",
	"AcePursuit",
	"BombSquad",
	"Exfil",
	"Vertigo",
] as const;

export async function startProject(
	destination: string,
	template: (typeof templates)[number] | "None",
	name?: string,
) {
	if (["AcePursuit", "BombSquad", "Exfil", "Vertigo"].includes(template)) {
		const importPath = path.resolve(templatesDir, `${template}.json`);
		await importFile(importPath, destination, name);
	} else if (template === "None") {
		// Do nothing if none
	} else {
		// Handles the Basic and any other template provided
		const templateDir = path.resolve(templatesDir, template);
		fs.cpSync(templateDir, destination, { recursive: true });
	}

	fs.cpSync(path.resolve(templatesDir, "All"), destination, {
		recursive: true,
	});

	if (name) renameFilesRecursively(destination, name);
}

export function installDependencies(projectDir: string) {
	try {
		child_process.execSync(`npm install`, {
			stdio: "inherit",
			cwd: projectDir,
		});
		return true;
	} catch (_err) {
		return false;
	}
}

const _defaultTargetDir = "bf6-mod";
const cancel = () => prompts.cancel("Operation cancelled");

function isEmpty(path: string) {
	const files = fs.readdirSync(path);
	return files.length === 0 || (files.length === 1 && files[0] === ".git");
}

function emptyDir(dir: string) {
	if (!fs.existsSync(dir)) {
		return;
	}
	for (const file of fs.readdirSync(dir)) {
		if (file === ".git") {
			continue;
		}
		fs.rmSync(path.resolve(dir, file), { recursive: true, force: true });
	}
}

export async function init(argTargetDir?: string) {
	prompts.intro("Initialize Bf6 Mod");

	const path = argTargetDir
		? argTargetDir
		: await prompts.text({
				message: "Where should we create your project?",
				placeholder: "./ace-pursuit",
				validate: (value) => {
					if (!value) return "Please enter a path.";
					if (value[0] !== ".") return "Please enter a relative path.";
				},
			});
	if (prompts.isCancel(path)) return cancel();

	let name = await prompts.text({
		message: "What is the name of your mod?",
		placeholder: "Ace Pursuit",
		validate: (value) => {
			if (!value.trim()) return "Please enter a name.";
		},
	});
	if (prompts.isCancel(name)) return cancel();
	name = name.trim();

	if (fs.existsSync(path) && !isEmpty(path)) {
		let overwrite: "yes" | "no" | "ignore" | undefined;
		const res = await prompts.select({
			message:
				(path === "." ? "Current directory" : `Target directory "${path}"`) +
				` is not empty. Please choose how to proceed:`,
			options: [
				{
					label: "Cancel operation",
					value: "no",
				},
				{
					label: "Remove existing files and continue",
					value: "yes",
				},
				{
					label: "Ignore files and continue",
					value: "ignore",
				},
			],
		});
		if (prompts.isCancel(res)) return cancel();
		overwrite = res;

		switch (overwrite) {
			case "yes":
				emptyDir(path);
				break;
			case "no":
				cancel();
				return;
		}
	}

	const template = await prompts.select({
		message: "Select a template:",
		options: templates.map((template) => {
			return {
				label: template,
				value: template,
			};
		}),
	});
	if (prompts.isCancel(template)) return cancel();

	await startProject(path, template, name);

	const s = prompts.spinner();
	s.start("Installing via npm");
	const installed = installDependencies(path);
	if (installed) s.stop("Installed via npm");
	else s.stop("Failed to install via npm", 1);

	const nextSteps = `cd ${path}\nnpm run build`;

	prompts.note(nextSteps, "Next steps.");
}
