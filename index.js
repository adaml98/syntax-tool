#!/usr/bin/env node
const { Command } = require("commander");
const { description, version } = require("./package.json");
const psql = require("./commands/psql");
const js = require("./commands/javascript");
const program = new Command();

program
  .name("syntax-tool")
  .description(description)
  .version(version, "-v", "-version");

program
  .command("psql")
  .description("PSQL CLI commands")
  .action(() => {
    psql();
  });

program
  .command("js")
  .description("JS popular functions")
  .action(() => {
    js();
  });

program.parse();
