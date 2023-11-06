import { Command } from "commander";

export const program = new Command();

program
    .argument("<string>", "string to log")
    .action((message: string) => {
        console.log(`Hello ${message}`);
    })
    .description("Command helper for tedy-cli");

program.parse(process.argv);