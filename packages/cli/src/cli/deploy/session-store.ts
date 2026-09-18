import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import colors from "colors";
import { printToConsole } from "../utils.ts";

/**
 * Persists the Portal session id. Uses the system keychain via keytar when it
 * is available; keytar is a native module whose install script may have been
 * blocked (npm 12 does this by default outside a project), in which case the
 * session is kept in a file only the current user can read.
 */

const SERVICE = "bf6mods";
const ACCOUNT = "sessionId";
const FALLBACK_DIR = path.join(os.homedir(), ".bf6mods");
const FALLBACK_FILE = path.join(FALLBACK_DIR, "session");

type Keytar = typeof import("keytar");

let keytarPromise: Promise<Keytar | undefined> | undefined;

function loadKeytar() {
	if (!keytarPromise)
		keytarPromise = import("keytar")
			.then((module) => module.default ?? (module as unknown as Keytar))
			.catch(() => {
				printToConsole(
					colors.yellow(
						`⚠ System keychain unavailable, storing the session in ${FALLBACK_FILE}`,
					),
				);
				return undefined;
			});
	return keytarPromise;
}

export async function getStoredSessionId(): Promise<string | undefined> {
	const keytar = await loadKeytar();
	if (keytar) return (await keytar.getPassword(SERVICE, ACCOUNT)) ?? undefined;
	try {
		return fs.readFileSync(FALLBACK_FILE, "utf8").trim() || undefined;
	} catch {
		return undefined;
	}
}

export async function storeSessionId(sessionId: string) {
	const keytar = await loadKeytar();
	if (keytar) return keytar.setPassword(SERVICE, ACCOUNT, sessionId);
	fs.mkdirSync(FALLBACK_DIR, { recursive: true, mode: 0o700 });
	fs.writeFileSync(FALLBACK_FILE, sessionId, { mode: 0o600 });
}

export async function deleteStoredSessionId() {
	const keytar = await loadKeytar();
	if (keytar) return keytar.deletePassword(SERVICE, ACCOUNT);
	fs.rmSync(FALLBACK_FILE, { force: true });
}
