import {
	add,
	subtract,
	multiply,
	divide,
} from "./math.ts";

export function calculate(a: number, b: number): number {
	return add(a, b) + subtract(a, b) + multiply(a, b) + divide(a, b);
}
