#!/usr/bin/env node
import { Command } from "commander";
import pkg from "../../package.json" with { type: "json" };
import { build } from "./build/index.ts";
import { dev } from "./dev.ts";
import { importFile } from "./import.ts";
import { init, installDependencies } from "./init.js";
import { Bf6Logger } from "./log.ts";
import { prepare } from "./prepare.js";

const program = new Command();

program
	.name(Object.keys(pkg.bin)[0])
	.description(pkg.description)
	.version(pkg.version);

program
	.command("init")
	.argument("[directory]")
	.description("Create a new bf6 mod")
	.action(async (directory) => {
		await init(directory);
	});

program
	.command("build")
	.description("build the bf6 mod")
	.action(async () => {
		await build();
	});

program
	.command("prepare")
	.description("prepare the types for bf6 mod")
	.action(async () => {
		await prepare();
	});

program
	.command("dev")
	.description("watch the changes in src, and recompile as needed")
	.action(async () => {
		await dev();
	});

program
	.command("import")
	.argument("<input>")
	.argument("<output>")
	.description("decompiles the json config of a mod into a new project")
	.action(async (input, output) => {
		await importFile(input as string, output as string, undefined, true);
		installDependencies(output);
	});

program
	.command("log")
	.argument("[input]")
	.description("logs the output from a locally running server")
	.action(async (input) => {
		const logger = new Bf6Logger(input);
		logger.start();
	});

program.exitOverride((_err) => {
	if (process.env.EXIT_CODE === "none") process.exit(0);
});

program.parse();
