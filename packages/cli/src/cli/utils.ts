import colors from "colors";
import stripAnsi from "strip-ansi";

/**
 * Safely prints a message with a right-aligned timestamp.
 */
export const printToConsole = (message: string, error: boolean = false) => {
	const now = new Date();
	const formattedTime = colors.grey(now.toLocaleTimeString());
	const terminalWidth = process.stdout.columns || 80;

	const timeLength = stripAnsi(formattedTime).length;
	const messageLength = stripAnsi(message).length;
	const available = terminalWidth - (messageLength + timeLength);

	const spacing = available > 1 ? " ".repeat(available) : " ";

	if (error) console.error(`${message}${spacing}${formattedTime}`);
	else console.log(`${message}${spacing}${formattedTime}`);
};
