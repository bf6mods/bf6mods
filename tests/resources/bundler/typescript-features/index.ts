import { MyClass, MyEnum, Helper } from "./types.ts";

const instance = new MyClass();
console.log(instance.value);
console.log(MyEnum.A);

const items: MyClass[] = [instance];
const helper = new Helper();

export function run(): void {
	helper.process(items);
}
