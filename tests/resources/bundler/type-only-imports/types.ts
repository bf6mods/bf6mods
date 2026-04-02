export interface Config {
	name: string;
	enabled: boolean;
}

export type Status = "active" | "inactive";

export const defaultConfig: Config = {
	name: "default",
	enabled: true,
};
