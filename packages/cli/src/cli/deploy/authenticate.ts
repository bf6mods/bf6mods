import os from "node:os";
import path from "node:path";
import colors from "colors";
import keytar from "keytar";
import { printToConsole } from "../utils.ts";
import { clients } from "./index.ts";

export type PuppeteerImport = typeof import("puppeteer");

export async function getSessionIdFromCookies() {
	let puppeteer: PuppeteerImport;
	try {
		puppeteer = (await import("puppeteer")) as unknown as PuppeteerImport;
	} catch (_error) {
		printToConsole(`${colors.red.bold("✗")} Puppeteer could not be loaded.`);
		console.error(
			"It looks like Puppeteer is not installed in this environment.",
		);
		console.error(
			`${colors.green.bold("✓")} Fix: install Puppeteer locally in the CLI package:`,
		);
		console.error("	 npm i -g puppeteer");
		console.error("\nIf you prefer not to install a browser automation tool,");
		console.error(
			"you can instead provide an auth code using the --auth-code option:",
		);
		console.error("	 bf6mods deploy <input> --auth-code=<code>\n");
		process.exit(0);
	}

	const profileDir = path.join(os.homedir(), ".bf6mods-browser");

	const browser = await puppeteer.launch({
		headless: false,
		defaultViewport: null,
		userDataDir: profileDir,
	});
	const page = await browser.newPage();
	await page.goto("https://portal.battlefield.com/bf6/experiences");
	console.log("Please log in to Battlefield Portal if needed...");

	// Poll for bf6sessionId cookie
	await page.waitForFunction(
		() => {
			return document.cookie.includes("bf6sessionId");
		},
		{ timeout: 0 },
	); // no timeout, wait as long as needed

	console.log(`${colors.green.bold("✓")} Login detected!`);

	const cookies = await browser.cookies();
	await browser.close();

	return cookies.find((cookie) => cookie.name === "bf6sessionId")?.value;
}

export async function tryAuthenticateWithSessionId(sessionId: string) {
	await clients.authenticate({
		sessionId,
	});

	try {
		await clients.play.getProgressionTypes({});
	} catch (error) {
		if (!(error instanceof Error)) return false;
		if (error.message === "[unauthenticated]") return false;
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
		printToConsole(
			`${colors.red("✗")} Provided sessionId is invalid, ignoring…`,
		);
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
		printToConsole(
			`${colors.red("✗")} Failed to retrieve Battlefield session, exiting.`,
			true,
		);
		return false;
	}

	if (await tryAuthenticateWithSessionId(cookieSessionId)) {
		await keytar.setPassword("bf6mods", "sessionId", cookieSessionId);
		return true;
	}

	printToConsole(
		`${colors.red("✗")} Authentication failed. Session may have expired immediately.`,
		true,
	);

	return false;
}

export async function alwaysAuthenticatedRequest<T>(
	method: () => Promise<T> | T,
	sessionId: string | undefined,
): Promise<T> {
	try {
		return await method();
	} catch (error) {
		if (error instanceof Error && error.message === "[unauthenticated]") {
			printToConsole("🔄 Session expired. Re-authenticating…");
			const success = await authenticate(sessionId);
			if (!success) throw error;
			return await method();
		}
		throw error;
	}
}
