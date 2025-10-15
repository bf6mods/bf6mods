import colors from "colors";
import stripAnsi from "strip-ansi";

/**
 * Safely prints a message with a right-aligned timestamp.
 */
export const printToConsole = (message: string) => {
	const now = new Date();
	const formattedTime = colors.grey(now.toLocaleTimeString());
	const terminalWidth = process.stdout.columns || 80;

	const timeLength = stripAnsi(formattedTime).length;
	const messageLength = stripAnsi(message).length;
	const available = terminalWidth - (messageLength + timeLength);

	const spacing = available > 1 ? " ".repeat(available) : " ";

	console.log(`${message}${spacing}${formattedTime}`);
};
