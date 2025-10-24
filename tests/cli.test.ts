import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect } from "vitest";
import { createModTest, tmpdirTest } from "./test-extensions";
import {
	build,
	buildPackages,
	checkTypes,
	compareDirectories,
	runCli,
} from "./utils";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let cliTarPath: string;
let sdkTarPath: string;
describe.concurrent("@bf6mods/cli", async () => {
	[cliTarPath, sdkTarPath] = await buildPackages();

	tmpdirTest.concurrent(
		"shows help when no args are provided",
		async ({ tmpdir }) => {
			const { stdout } = await runCli([], tmpdir);
			expect(stdout).toContain("Usage");
			expect(stdout).toContain("init");
		},
	);

	createModTest(cliTarPath, sdkTarPath).concurrent(
		"creates a new mod project via `init`",
		async ({ mod }) => {
			const expectedDir = path.resolve(
				__dirname,
				"resources",
				"expected",
				mod.path,
			);

			await compareDirectories(expectedDir, mod.fullPath);
		},
	);

	tmpdirTest.concurrent(
		"imports all existing JSON projects via `import`", {
			timeout: 100_000
		}, async ({ tmpdir }) => {
			const jsonFiles: string[] = [];
			const filesGlob = fs.promises.glob(
				path.resolve(__dirname, "resources", "starting", "imports", "*.json"),
			);
			for await (const entry of filesGlob) jsonFiles.push(entry);

			for (const inputFile of jsonFiles) {
				const outputDir = path.join(
					tmpdir,
					`imported-${path.parse(inputFile).name}`,
				);
				const expectedDir = path.resolve(
					__dirname,
					"resources",
					"expected",
					"imports",
					path.parse(inputFile).name,
				);

				await runCli(
					["import", inputFile, outputDir, "--no-install-dependencies"],
					tmpdir,
				);

				await compareDirectories(expectedDir, outputDir);
			}
		},
	);

	createModTest(cliTarPath, sdkTarPath, {
		installDependencies: true,
	}).concurrent(
		"create a new project and install dependencies",
		{
			timeout: 100_000,
		},
		async () => {},
	);

	createModTest(cliTarPath, sdkTarPath, {
		template: "Exfil",
		installDependencies: true,
	}).concurrent(
		"build & verify Exfil template",
		{
			timeout: 100_000,
		},
		async ({ mod }) => {
			const { exitCode } = await build(mod.fullPath);
			expect(exitCode, "Exit code is not 0!").toBe(0);

			const { exitCode: typeExit } = await checkTypes(mod.fullPath);
			expect(typeExit, "TypeScript type check failed!").toBe(0);
		},
	);

	createModTest(cliTarPath, sdkTarPath, {
		template: "AcePursuit",
		installDependencies: true,
	}).concurrent(
		"build & verify AcePursuit template",
		{
			timeout: 100_000,
		},
		async ({ mod }) => {
			const { exitCode } = await build(mod.fullPath);
			expect(exitCode, "Exit code is not 0!").toBe(0);

			const { exitCode: typeExit } = await checkTypes(mod.fullPath);
			expect(typeExit, "TypeScript type check failed!").toBe(0);
		},
	);

	createModTest(cliTarPath, sdkTarPath, {
		template: "BombSquad",
		installDependencies: true,
	}).concurrent(
		"build & verify BombSquad template",
		{
			timeout: 100_000,
		},
		async ({ mod, tmpdir }) => {
			const { exitCode } = await build(mod.fullPath);
			expect(exitCode, "Exit code is not 0!").toBe(0);

			const { exitCode: typeExit } = await checkTypes(mod.fullPath);
			expect(typeExit, "TypeScript type check failed!").toBe(0);
		},
	);

	createModTest(cliTarPath, sdkTarPath, {
		template: "Vertigo",
		installDependencies: true,
	}).concurrent(
		"build & verify Vertigo template",
		{
			timeout: 100_000,
		},
		async ({ mod }) => {
			const { exitCode } = await build(mod.fullPath);
			expect(exitCode, "Exit code is not 0!").toBe(0);

			const { exitCode: typeExit } = await checkTypes(mod.fullPath);
			expect(typeExit, "TypeScript type check failed!").toBe(0);
		},
	);

	createModTest(cliTarPath, sdkTarPath, {
		template: "Basic",
		installDependencies: true,
	}).concurrent(
		"build & verify Basic template",
		{
			timeout: 100_000,
		},
		async ({ mod }) => {
			const { exitCode } = await build(mod.fullPath);
			expect(exitCode, "Exit code is not 0!").toBe(0);

			const { exitCode: typeExit } = await checkTypes(mod.fullPath);
			expect(typeExit, "TypeScript type check failed!").toBe(0);
		},
	);

	createModTest(cliTarPath, sdkTarPath, {
		template: "Basic",
		installDependencies: true,
	}).concurrent(
		"verify sdk",
		{
			timeout: 100_000,
		},
		async ({ mod }) => {
			console.log('mod.fullPath:', mod.fullPath);
			const index = path.resolve(mod.fullPath, 'src', 'index.ts');
			const sdkVerification = fs.readFileSync(path.resolve(__dirname, "resources", "starting", "sdk-verification", "index.ts"), { encoding: 'utf-8' });
			fs.writeFileSync(index, sdkVerification);

			const { exitCode } = await build(mod.fullPath);
			expect(exitCode, "Exit code is not 0!").toBe(0);

			const { exitCode: typeExit } = await checkTypes(mod.fullPath);
			expect(typeExit, "TypeScript type check failed!").toBe(0);
		},
	);
});
