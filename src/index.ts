#!/usr/bin/env node
import { Command } from "commander";
import { init } from "./init";

export const program = new Command();

program
  .command("init")
  .option("-p, --pnpm", "use pnpm for installation")
  .action(init)
  .description("Command helper for tedy-cli");

program.parse(process.argv);
