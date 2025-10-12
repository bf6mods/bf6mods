#!/usr/bin/env node
import { Command } from "commander";
import pkg from "../../package.json" with { type: "json" };
import { build } from "./build.js";
import { init } from "./init.js";
import { prepare } from "./prepare.js";

const program = new Command();

program
	.name(Object.keys(pkg.bin)[0])
	.description(pkg.description)
	.version(pkg.version);

program
	.command("init")
	.description("Create a new bf6 mod")
	.action(async () => {
		await init();
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

program.exitOverride((_err) => {
	if (process.env.EXIT_CODE === "none") process.exit(0);
});

program.parse();
