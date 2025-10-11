import stripAnsi from 'strip-ansi';

export const printToConsole = (message: string) => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString().grey;

    const terminalWidth = process.stdout.columns || 80; // Default to 80 if terminal width is not available
    const timeLength = stripAnsi(formattedTime).length;
    const messageLength = stripAnsi(message).length;

    console.log(`${message}${' '.repeat(terminalWidth - (messageLength + timeLength))}${formattedTime}`);
};
