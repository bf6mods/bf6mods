import { add, times, PI } from "./exports.ts";

export function main(): number {
	return add(1, times(2, PI));
}
