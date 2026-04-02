import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import {
	mergeTypeScriptFiles,
	splitTypeScriptFile,
} from "../packages/cli/src/cli/build/ts-merge.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fixtures = path.resolve(__dirname, "resources", "bundler");

function entry(testCase: string): string {
	return path.resolve(fixtures, testCase, "index.ts");
}

describe("mergeTypeScriptFiles", () => {
	it("merges two files with types preserved", () => {
		const result = mergeTypeScriptFiles(entry("basic-merge"));

		// Types preserved
		expect(result).toContain("a: number, b: number): number");
		// Dependency inlined
		expect(result).toContain("function add(");
		expect(result).toContain("const PI = 3.14159");
		// Import removed
		expect(result).not.toContain('from "./math');
		// Entrypoint exports kept
		expect(result).toContain("export function main()");
		// Dependency exports stripped
		expect(result).toMatch(/^function add\(/m);
		expect(result).toMatch(/^const PI/m);
	});

	it("preserves TypeScript features: interfaces, enums, classes, types", () => {
		const result = mergeTypeScriptFiles(entry("typescript-features"));

		// Interface preserved
		expect(result).toContain("interface MyInterface");
		// Type alias preserved
		expect(result).toContain("type StringOrNumber = string | number");
		// Enum preserved as TS enum (not compiled to JS object)
		expect(result).toContain("enum MyEnum");
		expect(result).toContain("A = 1");
		// Class with implements preserved
		expect(result).toContain("class MyClass implements MyInterface");
		// Typed array preserved
		expect(result).toContain("items: MyClass[]");
		// Return type preserved
		expect(result).toContain("): void");
	});

	it("handles circular dependencies without infinite loop", () => {
		const result = mergeTypeScriptFiles(entry("circular-deps"));

		// Both modules included
		expect(result).toContain("const a =");
		expect(result).toContain("const b =");
		// Entrypoint export kept
		expect(result).toContain("export function main()");
		// No imports remain
		expect(result).not.toContain('from "./module');
	});

	it("handles export * (barrel files)", () => {
		const result = mergeTypeScriptFiles(entry("export-star"));

		// Functions from re-exported modules are included
		expect(result).toContain("function add(");
		expect(result).toContain("const PI = 3.14159");
		expect(result).toContain("const E = 2.71828");
		// Re-export declarations removed
		expect(result).not.toContain('export * from');
		// No imports remain
		expect(result).not.toContain('from "./');
	});

	it("handles namespace imports", () => {
		const result = mergeTypeScriptFiles(entry("namespace-imports"));

		// Math functions included
		expect(result).toContain("function add(");
		expect(result).toContain("function multiply(");
		// No imports remain
		expect(result).not.toContain('import *');
	});

	it("works with a single file (no imports)", () => {
		const result = mergeTypeScriptFiles(entry("single-file"));

		expect(result).toContain("export function hello()");
		expect(result).toContain("x: number = 42");
		// Header present
		expect(result).toContain("Modules included: 1");
	});

	it("silently removes external package imports", () => {
		const result = mergeTypeScriptFiles(entry("external-imports"));

		// External import removed
		expect(result).not.toContain("@bf6mods/sdk");
		// Local code preserved
		expect(result).toContain("function helper()");
		expect(result).toContain("export function main()");
	});

	it("adds header metadata", () => {
		const result = mergeTypeScriptFiles(entry("basic-merge"));

		expect(result).toContain("Bundle generated:");
		expect(result).toContain("Entry point: index.ts");
		expect(result).toContain("Modules included: 2");
	});

	it("adds region markers for each file", () => {
		const result = mergeTypeScriptFiles(entry("basic-merge"));

		expect(result).toContain("//#region math.ts");
		expect(result).toContain("//#region index.ts");
		// Two endregion markers
		const endregions = result.match(/\/\/#endregion/g);
		expect(endregions?.length).toBe(2);
	});

	it("throws on missing entry file", () => {
		expect(() =>
			mergeTypeScriptFiles(path.resolve(fixtures, "nonexistent", "index.ts")),
		).toThrow("Entry file not found");
	});

	it("handles deep dependency chain (A -> B -> C -> D)", () => {
		const result = mergeTypeScriptFiles(entry("deep-chain"));

		// All 5 modules included in correct order
		expect(result).toContain("Modules included: 5");
		// Deepest dependency appears first
		const dPos = result.indexOf('const BASE');
		const cPos = result.indexOf('const value');
		const bPos = result.indexOf('const transformed');
		const aPos = result.indexOf('const result');
		expect(dPos).toBeLessThan(cPos);
		expect(cPos).toBeLessThan(bPos);
		expect(bPos).toBeLessThan(aPos);
		// Types preserved
		expect(result).toContain("const BASE: string");
		expect(result).toContain("const value: string");
		// No imports remain
		expect(result).not.toContain('from "./');
	});

	it("handles diamond dependencies (shared dep included only once)", () => {
		const result = mergeTypeScriptFiles(entry("diamond-deps"));

		// shared.ts should appear exactly once
		const matches = result.match(/const shared: string = "SHARED"/g);
		expect(matches?.length).toBe(1);
		// All modules present
		expect(result).toContain("const fromA");
		expect(result).toContain("const fromB");
		expect(result).toContain("Modules included: 4");
	});

	it("handles default exports (class and function)", () => {
		const result = mergeTypeScriptFiles(entry("default-exports"));

		// Default class preserved (export stripped for non-entrypoint)
		expect(result).toContain("class MyClass");
		expect(result).toContain("constructor(public name: string)");
		// Default function preserved
		expect(result).toContain("function greet(name: string): string");
		// No imports remain
		expect(result).not.toContain('from "./');
	});

	it("handles re-exports with rename", () => {
		const result = mergeTypeScriptFiles(entry("reexport-rename"));

		// Original functions included
		expect(result).toContain("function add(");
		expect(result).toContain("function multiply(");
		expect(result).toContain("const PI = 3.14159");
		// Re-export declarations removed
		expect(result).not.toContain("export {");
		expect(result).not.toContain('from "./math');
	});

	it("handles type-only imports (import type)", () => {
		const result = mergeTypeScriptFiles(entry("type-only-imports"));

		// Type-only import removed
		expect(result).not.toContain("import type");
		// Interface and type alias preserved
		expect(result).toContain("interface Config");
		expect(result).toContain('type Status = "active" | "inactive"');
		// Runtime value preserved
		expect(result).toContain("const defaultConfig: Config");
		// Entrypoint types preserved
		expect(result).toContain("config: Config");
		expect(result).toContain('status: Status = "active"');
	});

	it("handles empty imported files gracefully", () => {
		const result = mergeTypeScriptFiles(entry("empty-file"));

		// Entrypoint content preserved
		expect(result).toContain("export const value = 42");
		// No imports remain
		expect(result).not.toContain('from "./empty');
	});

	it("handles multiline import declarations", () => {
		const result = mergeTypeScriptFiles(entry("multiline-imports"));

		// All functions included
		expect(result).toContain("function add(");
		expect(result).toContain("function subtract(");
		expect(result).toContain("function multiply(");
		expect(result).toContain("function divide(");
		// Multiline import fully removed (no leftover lines)
		expect(result).not.toContain("import");
		// Entrypoint export preserved with types
		expect(result).toContain("export function calculate(a: number, b: number): number");
	});
});

describe("splitTypeScriptFile", () => {
	it("round-trips merge then split", () => {
		const merged = mergeTypeScriptFiles(entry("basic-merge"));
		const files = splitTypeScriptFile(merged);

		expect(files.size).toBe(2);
		expect(files.has("math.ts")).toBe(true);
		expect(files.has("index.ts")).toBe(true);

		// Content preserved
		const math = files.get("math.ts")!;
		expect(math).toContain("function add(a: number, b: number): number");
		expect(math).toContain("const PI = 3.14159");

		const index = files.get("index.ts")!;
		expect(index).toContain("export function main()");
	});

	it("round-trips typescript features", () => {
		const merged = mergeTypeScriptFiles(entry("typescript-features"));
		const files = splitTypeScriptFile(merged);

		expect(files.size).toBe(2);
		const types = files.get("types.ts")!;
		expect(types).toContain("interface MyInterface");
		expect(types).toContain("enum MyEnum");
		expect(types).toContain("class MyClass implements MyInterface");
	});
});
