export function MakeMessage(message: string, ...args: any[]) {
    switch (args.length) {
        case 0:
            return mod.Message(message);
        case 1:
            return mod.Message(message, args[0]);
        case 2:
            return mod.Message(message, args[0], args[1]);
        case 3:
            return mod.Message(message, args[0], args[1], args[2]);
        default:
            throw new Error("Invalid number of arguments");
    }
}
