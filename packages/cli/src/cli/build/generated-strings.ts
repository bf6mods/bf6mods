import type { Node, VariableDeclarator } from "@oxc-project/types";
import type { Plugin } from "rolldown";

export function extractBf6Strings(
	bf6Strings: Record<string, string>,
	generateFromLiterals: boolean,
): Plugin {
	return {
		name: "extract-bf6-strings",
		generateBundle(_options, bundle) {
			if (!generateFromLiterals) return;

			let id = 0;
			const existingStrings = new Set(Object.values(bf6Strings));

			for (const [_file, output] of Object.entries(bundle)) {
				if (output.type !== "chunk") continue;
				const code = output.code;

				// Parse the code with rolldown’s parser
				const program = this.parse(code, {
					lang: "ts",
					astType: "js",
					range: true,
				});

				// Visit every node recursively to collect string literals
				function walk(node: Node) {
					if (node.type === "Literal") {
						if (
							typeof node.value !== "string" ||
							node.value === "" ||
							node.value === "----uniquename----"
						)
							return;
						if (
							!(node.value in bf6Strings) &&
							!existingStrings.has(node.value)
						) {
							existingStrings.add(node.value);
							bf6Strings[`__auto__${id++}`] = node.value;
						}
					}

					for (const value of Object.values(node)) {
						if (!value) continue;
						if (Array.isArray(value)) {
							for (const v of value) {
								if (v && typeof v === "object" && "type" in v) walk(v as Node);
							}
						} else if (typeof value === "object" && "type" in value) {
							walk(value as Node);
						}
					}
				}

				for (const item of program.body) {
					walk(item);
				}
			}
		},
		moduleParsed(moduleInfo) {
			if (moduleInfo.code && moduleInfo.exports.includes("bf6Strings")) {
				const code = moduleInfo.code;
				const getSnippet = (
					start: number,
					end: number,
					linesBefore = 2,
					linesAfter = 2,
				) => {
					const lines = code.split(/\r?\n/);
					const startLine = Math.max(
						0,
						code.slice(0, start).split(/\r?\n/).length - 1 - linesBefore,
					);
					const endLine = Math.min(
						lines.length,
						code.slice(0, end).split(/\r?\n/).length - 1 + linesAfter,
					);
					return lines
						.slice(startLine, endLine)
						.map((line, i) => {
							const actualLine = startLine + i + 1;
							return `${actualLine.toString().padStart(3)} | ${line}`;
						})
						.join("\n");
				};

				const program = this.parse(code, {
					lang: "ts",
					astType: "js",
					range: true,
				});

				const extractObjectLiteral = (declaration: VariableDeclarator) => {
					if (declaration.init?.type !== "ObjectExpression") {
						const snippet = getSnippet(...(declaration.range ?? [0, 0]));
						this.error(
							`❌ Invalid bf6Strings export: expected an object literal.\n\n${snippet}`,
						);
					}

					for (const property of declaration.init.properties) {
						if (property.type !== "Property") {
							const snippet = getSnippet(...(property.range ?? [0, 0]));
							this.error(
								`❌ Invalid bf6Strings property: expected a key/value pair.\nFound type: ${property.type}\n\n${snippet}`,
							);
						}

						let key:
							| string
							| number
							| bigint
							| boolean
							| RegExp
							| null
							| undefined;
						if (property.key.type === "Literal") {
							key = property.key.value;
						} else if (property.key.type === "Identifier") {
							key = property.key.name;
						} else {
							const snippet = getSnippet(...(property.range ?? [0, 0]));
							this.error(
								`❌ Invalid bf6Strings key: expected a string literal or identifier.\nFound type: ${property.key.type}\n\n${snippet}`,
							);
							continue;
						}

						if (property.value.type !== "Literal") {
							const snippet = getSnippet(...(property.range ?? [0, 0]));
							this.error(
								`❌ Invalid bf6Strings value: expected a string literal.\nFound type: ${property.value.type}\n\n${snippet}`,
							);
						}

						const value = property.value.value;
						if (
							typeof key !== "string" &&
							typeof key !== "number" &&
							typeof key !== "bigint" &&
							typeof key !== "boolean"
						) {
							const snippet = getSnippet(...(property.range ?? [0, 0]));
							this.error(
								`❌ bf6Strings key must be a string, found: ${typeof key}\n\n${snippet}`,
							);
						}

						if (
							typeof value !== "string" &&
							typeof value !== "number" &&
							typeof value !== "bigint" &&
							typeof value !== "boolean"
						) {
							const snippet = getSnippet(...(property.range ?? [0, 0]));
							this.error(
								`❌ bf6Strings value must be a string, found: ${typeof value}\n\n${snippet}`,
							);
						}

						bf6Strings[`${key}`] = `${value}`;
					}
				};

				for (const item of program.body) {
					// Case 1: plain variable `var bf6Strings = {...}`
					if (item.type === "VariableDeclaration") {
						for (const declaration of item.declarations) {
							if (
								declaration.type === "VariableDeclarator" &&
								declaration.id.type === "Identifier" &&
								declaration.id.name === "bf6Strings"
							) {
								extractObjectLiteral(declaration);
							}
						}
					}

					// Case 2: exported variable `export const bf6Strings = {...}`
					if (
						item.type === "ExportNamedDeclaration" &&
						item.declaration?.type === "VariableDeclaration"
					) {
						for (const declaration of item.declaration.declarations) {
							if (
								declaration.type === "VariableDeclarator" &&
								declaration.id.type === "Identifier" &&
								declaration.id.name === "bf6Strings"
							) {
								extractObjectLiteral(declaration);
							}
						}
					}
				}
			}
		},
	};
}
