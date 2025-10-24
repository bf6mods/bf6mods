import { expect } from "vitest";
import path from "path";
import fs from "fs";
import { execa } from "execa";

const CLI_PATH = path.resolve("dist/cli/index.js");
export async function runCli(args: string[], cwd: string) {
	return await execa("node", [CLI_PATH, ...args], {
		cwd,
	});
}

export async function compareDirectories(expectedDir: string, outputDir: string) {
	const expectedFiles: string[] = [];

	// Collect all files in expectedDir (relative paths)
	for await (const dirent of fs.promises.glob("**/*", {
		cwd: expectedDir,
		withFileTypes: true,
	})) {
		if (dirent.isFile()) {
			expectedFiles.push(path.relative(expectedDir, path.resolve(dirent.parentPath, dirent.name)));
		}
	}

	for (const relPath of expectedFiles) {
		const expectedPath = path.join(expectedDir, relPath);
		const outputPath = path.join(outputDir, relPath);

		expect(fs.existsSync(outputPath), `Missing file: "${relPath}" in output`).toBe(true);

		if (relPath === "package.json") {
			const [expectedJson, actualJson] = await Promise.all([
				fs.promises.readFile(expectedPath, "utf8").then(JSON.parse),
				fs.promises.readFile(outputPath, "utf8").then(JSON.parse),
			]);

			delete expectedJson.devDependencies;
			delete actualJson.devDependencies;

			expect(actualJson, `package.json mismatch (ignoring devDependencies)`).toEqual(expectedJson);
			continue;
		}

		const [expectedContent, actualContent] = await Promise.all([
			fs.promises.readFile(expectedPath, "utf8"),
			fs.promises.readFile(outputPath, "utf8"),
		]);

		expect(actualContent, `Content mismatch for ${relPath}`).toBe(expectedContent);
	}
}

export async function packageDep(projectDir: string) {
	const { stdout } = await execa("npm", ["pack"], { cwd: path.resolve(projectDir) });
	return stdout.trim();
}

export async function install(projectDir: string) {
	return await execa("npm", ["i"], { cwd: path.resolve(projectDir) });
}

export async function build(projectDir: string) {
	return await execa("npm", ["run", "build"], { cwd: path.resolve(projectDir) });
}

export async function checkTypes(projectDir: string) {
	return await execa("npm", ["run", "typecheck"], {
		cwd: path.resolve(projectDir),
	});
}

const ROOT = path.resolve(__dirname, "..", "..");
export async function buildPackages() {
	console.log("🏗️ Building packages before tests...");
	const { stdout, stderr, exitCode } = await execa("npm", ["run", "build"], { cwd: ROOT });

	if (stdout) console.log(stdout);
	if (stderr) console.error(stderr);

	expect(exitCode, 'building packages failed!').toBe(0);

	const cli = path.resolve(__dirname, "..");
	const sdk = path.resolve(__dirname, "..", "..", "sdk");

	const cliTarPath = await packageDep(cli);
	const sdkTarPath = await packageDep(sdk);

	return [path.resolve(cli, cliTarPath), path.resolve(sdk, sdkTarPath)];
}

export async function installDependenciesForMod(modPath: string, cliTarPath: string, sdkTarPath: string) {
	const pkgJsonPath = path.resolve(modPath, "package.json");
	if (!fs.existsSync(pkgJsonPath)) throw new Error("Expected package.json to exist");
	const pkg = JSON.parse(await fs.promises.readFile(pkgJsonPath, "utf8"));

	if (!pkg.devDependencies) pkg.devDependencies = {};
	if (pkg.devDependencies["@bf6mods/cli"]) {
		pkg.devDependencies["@bf6mods/cli"] = `file:${cliTarPath}`;
	}
	if (pkg.devDependencies["@bf6mods/sdk"]) {
		pkg.devDependencies["@bf6mods/sdk"] = `file:${sdkTarPath}`;
	}

	await fs.promises.writeFile(pkgJsonPath, JSON.stringify(pkg, null, 2));

	const { exitCode } = await install(modPath)
	if (exitCode !== 0) throw new Error(`Failed to install dependencies for path: ${modPath}`);
}