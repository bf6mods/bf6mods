import fs from "node:fs";
import path from "node:path";
import { Project } from "ts-morph";

/**
 * Merges multiple TypeScript files into a single file while preserving
 * all type annotations. Uses //#region markers so the merge can be reversed.
 *
 * - Resolves local (relative) imports and inlines them in dependency order
 * - Handles re-exports (export * from, export { x } from) and export assignments
 * - Removes external/package imports (e.g. @bf6mods/sdk — the portal provides globals)
 * - Preserves all TypeScript syntax: type annotations, enums, generics, etc.
 *
 * Inspired by ts-bf6-portal's bundler approach.
 */
export function mergeTypeScriptFiles(entrypointPath: string): string {
	const entrypointAbs = path.resolve(entrypointPath);
	const baseDir = path.dirname(entrypointAbs);

	if (!fs.existsSync(entrypointAbs)) {
		throw new Error(`Entry file not found: ${entrypointAbs}`);
	}

	const project = new Project({
		compilerOptions: {
			strict: false,
			noEmit: true,
			skipLibCheck: true,
			target: 99, // ESNext
			module: 99, // ESNext
		},
		skipAddingFilesFromTsConfig: true,
	});

	project.addSourceFileAtPath(entrypointAbs);

	// Collect all local source files in dependency order (dependencies first)
	const visited = new Set<string>();
	const orderedPaths: string[] = [];

	function collectModules(filePath: string): void {
		if (visited.has(filePath)) return;
		visited.add(filePath);

		if (!fs.existsSync(filePath)) {
			throw new Error(`Module not found: ${filePath}`);
		}

		const source = project.addSourceFileAtPath(filePath);

		// Follow relative imports
		for (const imp of source.getImportDeclarations()) {
			const spec = imp.getModuleSpecifierValue();
			if (spec.startsWith("./") || spec.startsWith("../")) {
				let resolved = path.resolve(path.dirname(filePath), spec);
				if (!resolved.endsWith(".ts")) resolved += ".ts";
				collectModules(resolved);
			}
			// Non-relative imports (packages) are silently ignored —
			// the BF6 portal provides mod/modlib as globals
		}

		// Follow relative re-exports (export * from, export { x } from)
		for (const exp of source.getExportDeclarations()) {
			const spec = exp.getModuleSpecifierValue();
			if (spec && (spec.startsWith("./") || spec.startsWith("../"))) {
				let resolved = path.resolve(path.dirname(filePath), spec);
				if (!resolved.endsWith(".ts")) resolved += ".ts";
				collectModules(resolved);
			}
		}

		orderedPaths.push(filePath);
	}

	collectModules(entrypointAbs);

	// Generate bundle header
	const timestamp = new Date().toISOString();
	const entryRelative = path.relative(baseDir, entrypointAbs).replace(/\\/g, "/");
	const parts: string[] = [
		`/**`,
		` * Bundle generated: ${timestamp}`,
		` * Entry point: ${entryRelative}`,
		` * Modules included: ${orderedPaths.length}`,
		` */`,
		``,
	];

	// Process each module: remove imports, handle exports, preserve types
	for (const filePath of orderedPaths) {
		const source = project.getSourceFileOrThrow(filePath);
		const relativePath = path.relative(baseDir, filePath).replace(/\\/g, "/");
		const isEntrypoint = filePath === entrypointAbs;

		// Remove all import declarations (flattened into single file)
		for (const imp of [...source.getImportDeclarations()]) {
			imp.remove();
		}

		// Remove re-export declarations with module specifiers
		// (e.g. export { foo } from "./bar", export * from "./bar")
		// The original exports are preserved in their source modules
		for (const exp of [...source.getExportDeclarations()]) {
			const spec = exp.getModuleSpecifierValue();
			if (spec && (spec.startsWith("./") || spec.startsWith("../"))) {
				exp.remove();
			}
		}

		// Convert export assignments (export = foo) to export default
		for (const exp of [...source.getExportAssignments()]) {
			const expr = exp.getExpression()?.getText();
			if (expr) {
				exp.replaceWithText(`export default ${expr};`);
			}
		}

		// For non-entrypoint files, strip export keywords from declarations
		// so they become file-local in the merged output.
		// We use ts-morph's AST instead of regex for reliability.
		if (!isEntrypoint) {
			// Remove export keyword from exported declarations
			for (const stmt of source.getStatements()) {
				if ("isExported" in stmt && typeof stmt.isExported === "function") {
					const exportable = stmt as { isExported: () => boolean; setIsExported: (v: boolean) => void; isDefaultExport: () => boolean; setIsDefaultExport: (v: boolean) => void };
					if (exportable.isExported()) {
						if (exportable.isDefaultExport()) {
							exportable.setIsDefaultExport(false);
						}
						exportable.setIsExported(false);
					}
				}
			}
		}

		let text = source.getFullText().trim();

		if (text.length > 0) {
			parts.push(`//#region ${relativePath}`);
			parts.push(text);
			parts.push(`//#endregion`);
			parts.push(``);
		}
	}

	return parts.join("\n") + "\n";
}

/**
 * Splits a merged TypeScript file back into individual files based on
 * //#region markers. Returns a map of relative file paths to their content.
 */
export function splitTypeScriptFile(
	mergedContent: string,
): Map<string, string> {
	const files = new Map<string, string>();
	const regionRegex = /^\/\/#region\s+(.+)$/gm;
	const endRegionRegex = /^\/\/#endregion$/gm;

	let match: RegExpExecArray | null;
	const regions: Array<{ path: string; startIdx: number }> = [];

	// Find all region start markers
	while ((match = regionRegex.exec(mergedContent)) !== null) {
		regions.push({
			path: match[1].trim(),
			startIdx: match.index + match[0].length + 1, // +1 for newline
		});
	}

	// Find all endregion markers
	const endPositions: number[] = [];
	while ((match = endRegionRegex.exec(mergedContent)) !== null) {
		endPositions.push(match.index);
	}

	// Pair them up
	for (let i = 0; i < regions.length; i++) {
		const region = regions[i];
		const endPos = endPositions[i];
		if (endPos !== undefined) {
			const content = mergedContent.slice(region.startIdx, endPos).trim();
			files.set(region.path, content + "\n");
		}
	}

	return files;
}
