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

        function walk(node: any) {
          if (!node || typeof node !== "object") return;

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
              if (param.type === "AssignmentPattern" && param.left?.type === "Identifier" && param.left.range) {
                edits.push({ pos: param.left.range[1], insert: ": any" });
              }
              if (param.type === "RestElement" && param.argument?.type === "Identifier" && param.argument.range) {
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
          result = result.slice(0, edit.pos) + edit.insert + result.slice(edit.pos);
        }

        output.code = result;
      }
    },
  };
}
