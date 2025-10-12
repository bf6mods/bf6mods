import path from "node:path";
import { createJiti } from "jiti";

export const getBf6Config = async (rootDir: string) => {
	const jiti = createJiti(rootDir, { interopDefault: true });
	const result = await jiti.import("./bf6.config", { default: true });
	return result;
};

export async function build() {
	const workingDir = path.resolve(".");
	getBf6Config(workingDir);
}
