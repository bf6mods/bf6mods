import MyClass from "./class.ts";
import myFunc from "./func.ts";

const instance = new MyClass("test");
export const result: string = myFunc(instance.name);
