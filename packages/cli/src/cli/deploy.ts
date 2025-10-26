import colors from 'colors';
import { printToConsole } from './utils.ts';

export async function deploy(input: string, authCode?: string) {
	printToConsole(`🚀 Starting deploy for ${colors.cyan(input)}…`);
}
