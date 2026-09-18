import type { Node } from "@oxc-project/types";
import type { Plugin } from "rolldown";

export function addAnyToParams(): Plugin {
	return {
		name: "add-any-to-params",
		generateBundle(_options, bundle) {
			for (const [_file, output] of Object.entries(bundle)) {
				if (output.type !== "chunk") continue;

				const program = this.parse(output.code, {
					lang: "js",
					astType: "js",
					range: true,
				});

				const edits: { pos: number; insert: string }[] = [];

				// Type stripping drops `foo: T;` field declarations, but the Portal
				// rejects `this.foo = …` on an undeclared field, so declare them again.
				function collectThisAssignments(node: Node, names: Set<string>) {
					if (!node || typeof node !== "object") return;
					// Nested classes and regular functions have their own `this`
					if (
						node.type === "ClassDeclaration" ||
						node.type === "ClassExpression" ||
						node.type === "FunctionDeclaration" ||
						node.type === "FunctionExpression"
					)
						return;
					if (
						node.type === "AssignmentExpression" &&
						node.left.type === "MemberExpression" &&
						node.left.object.type === "ThisExpression" &&
						!node.left.computed &&
						node.left.property.type === "Identifier"
					)
						names.add(node.left.property.name);
					for (const val of Object.values(node)) {
						if (Array.isArray(val))
							for (const item of val) collectThisAssignments(item, names);
						else if (val && typeof val === "object" && "type" in val)
							collectThisAssignments(val, names);
					}
				}

				function walk(node: Node) {
					if (!node || typeof node !== "object") return;

					if (
						(node.type === "ClassDeclaration" ||
							node.type === "ClassExpression") &&
						node.body.range
					) {
						const declared = new Set<string>();
						const assigned = new Set<string>();
						for (const member of node.body.body) {
							if (
								member.type === "PropertyDefinition" &&
								!member.computed &&
								member.key.type === "Identifier"
							)
								declared.add(member.key.name);
							else if (member.type === "MethodDefinition" && member.value.body)
								collectThisAssignments(member.value.body, assigned);
						}
						const missing = [...assigned].filter((name) => !declared.has(name));
						if (missing.length)
							edits.push({
								pos: node.body.range[0] + 1,
								insert: missing.map((name) => `\n\t${name}: any;`).join(""),
							});
					}

					// Arrow/function params are just Identifiers or Patterns in JS AST
					if (
						node.type === "FunctionDeclaration" ||
						node.type === "FunctionExpression" ||
						node.type === "ArrowFunctionExpression"
					) {
						for (const param of node.params) {
							if (param.type === "Identifier" && param.range) {
								edits.push({ pos: param.range[1], insert: ": any" });
							}
							if (
								param.type === "AssignmentPattern" &&
								param.left?.type === "Identifier" &&
								param.left.range
							) {
								edits.push({ pos: param.left.range[1], insert: ": any" });
							}
							if (
								param.type === "RestElement" &&
								param.argument?.type === "Identifier" &&
								param.argument.range
							) {
								edits.push({ pos: param.argument.range[1], insert: ": any" });
							}
							// Add ObjectPattern / ArrayPattern handling if needed
						}
					}

					for (const val of Object.values(node)) {
						if (Array.isArray(val)) val.forEach(walk);
						else if (val && typeof val === "object" && "type" in val) walk(val);
					}
				}

				for (const item of program.body) walk(item);

				edits.sort((a, b) => b.pos - a.pos);
				let result = output.code;
				for (const edit of edits) {
					result =
						result.slice(0, edit.pos) + edit.insert + result.slice(edit.pos);
				}

				output.code = result;
			}
		},
	};
}
