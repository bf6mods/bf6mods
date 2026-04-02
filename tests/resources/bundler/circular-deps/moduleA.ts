import { b } from "./moduleB.ts";

export const a = "A uses B: " + (b || "undefined");
