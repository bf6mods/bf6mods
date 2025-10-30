import colors from "colors";
import { printToConsole } from "./utils.ts";
import path from "node:path";
import os from "node:os";
import fs from "node:fs";
import { Clients, Generated_pb, protobuf } from "@bf6mods/portal";
import keytar from "keytar";
import { ConfigType } from "@bf6mods/sdk";

async function getSessionIdFromCookies() {
	try {
		await import('puppeteer');
	} catch (error) {
		printToConsole(`${colors.red.bold("✗")} Puppeteer could not be loaded.`);
		console.error("It looks like Puppeteer is not installed in this environment.");
		console.error(`${colors.green.bold("✓")} Fix: install Puppeteer locally in the CLI package:`);
		console.error("	 npm i -g puppeteer");
		console.error("\nIf you prefer not to install a browser automation tool,");
		console.error("you can instead provide an auth code using the --auth-code option:");
		console.error("	 bf6mods deploy <input> --auth-code=<code>\n");
		throw new Error("No puppeteer");
	}

	const profileDir = path.join(os.homedir(), '.bf6mods-browser');

	const puppeteer = await import('puppeteer');
	const browser = await puppeteer.launch({
		headless: false,
		defaultViewport: null,
		userDataDir: profileDir,
	});
	const page = await browser.newPage();
	await page.goto('https://portal.battlefield.com/bf6/experiences');
	console.log("Please log in to Battlefield Portal if needed...");

	// Poll for bf6sessionId cookie
	await page.waitForFunction(() => {
		return document.cookie.includes('bf6sessionId');
	}, { timeout: 0 }); // no timeout, wait as long as needed

	console.log(`${colors.green.bold("✓")} Login detected!`);

	const cookies = await page.cookies();
	await browser.close();

	return cookies.find(cookie => cookie.name === 'bf6sessionId')?.value;
}

const clients = new Clients();
export async function tryAuthenticateWithSessionId(sessionId: string) {
	await clients.authenticate({
		sessionId
	});

	try {
		await clients.play.getProgressionTypes({});
	} catch (error) {
		if (!(error instanceof Error)) return false;
		if (error.message === '[unauthenticated]') return false;
	}

	return true;
}

export async function authenticate(sessionIdParam?: string) {
	printToConsole(`🔑 Attempting authentication…`);

	if (sessionIdParam) {
		if (await tryAuthenticateWithSessionId(sessionIdParam)) {
			await keytar.setPassword("bf6mods", "sessionId", sessionIdParam);
			return true;
		}
		printToConsole(`${colors.red("✗")} Provided sessionId is invalid, ignoring…`);
	}

	const storedSessionId = await keytar.getPassword("bf6mods", "sessionId");
	if (storedSessionId) {
		if (await tryAuthenticateWithSessionId(storedSessionId)) {
			return true;
		}
		printToConsole(`${colors.yellow("⚠")} Stored sessionId expired, removing…`);
		await keytar.deletePassword("bf6mods", "sessionId");
	}

	printToConsole(`🌐 Launching browser to authenticate…`);
	const cookieSessionId = await getSessionIdFromCookies();

	if (!cookieSessionId) {
		printToConsole(`${colors.red("✗")} Failed to retrieve Battlefield session, exiting.`, true);
		return false;
	}

	if (await tryAuthenticateWithSessionId(cookieSessionId)) {
		await keytar.setPassword("bf6mods", "sessionId", cookieSessionId);
		return true;
	}

	printToConsole(`${colors.red("✗")} Authentication failed. Session may have expired immediately.`, true);

	return false;
}

export async function deploy(input?: string, sessionIdParam?: string, publish?: boolean) {
	// if (!input) input = path.resolve(".", "dist", "mod.json");
	// printToConsole(`🚀 Starting deploy for ${colors.cyan(input)}…`);
	// if (!fs.existsSync(input)) return printToConsole(`${colors.red.bold("✗")} File ${colors.cyan(input)} does not exist!`, true);

	if (!await authenticate(sessionIdParam)) return;

	console.log('clients.session:', clients.session);

	const blueprints = await clients.play.getScheduledBlueprints({});
	console.log('blueprints', blueprints);

	console.log("Request binary:", protobuf.toBinary(
		Generated_pb.GetBlueprintsByIdRequestSchema,
		{
			$typeName: 'santiago.common.GetBlueprintsByIdRequest',
			blueprintIds: blueprints.blueprintIds
		}
	));

	console.log('blueprints.blueprintIds:', blueprints.blueprintIds);


	try {
		const blueprint = await clients.play.getBlueprintsById({
			blueprintIds: blueprints.blueprintIds
		});
		console.log(blueprint);
	} catch (err: any) {
		console.error("RAW RESPONSE:", err.rawMessage);
		throw err;
	}


	// const mod = JSON.parse(fs.readFileSync(input, { encoding: 'utf-8' })) as ConfigType

	// clients.play.updatePlayElement({
	// 	name: mod.name,
	// 	description: {
	// 		value: mod.description
	// 	},
	// 	mapRotation: {
	// 		maps: mod.mapRotation?.map((map) => ({
	// 			levelName: 
	// 		}))
	// 	}
	// })
}
