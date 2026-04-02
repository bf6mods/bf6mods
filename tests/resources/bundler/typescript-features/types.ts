export interface MyInterface {
	value: string;
}

export type StringOrNumber = string | number;

export class MyClass implements MyInterface {
	value = "Hello";
}

export enum MyEnum {
	A = 1,
	B = 2,
	C = 3,
}

export class Helper {
	process(items: MyClass[]): void {
		for (const item of items) {
			console.log(item.value);
		}
	}
}
