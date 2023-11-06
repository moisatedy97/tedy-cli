#!/usr/bin/env node

import { Command } from "commander";
import { init } from "./init";

export const program = new Command();

program.command("init").action(init).description("Create typescript boilerplate with pnpm");

program.parse(process.argv);
