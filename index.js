#!/usr/bin/env node
const { Command } = require("commander");
const { description, version } = require("./package.json");
const chalk = require("chalk");
const program = new Command();

program
  .name("syntax-tool")
  .description(description)
  .version(version, "-v", "-version");

program
  .command("psql")
  .description("psql cli commands")
  .action(() => {
    console.log(`${chalk.bgCyanBright(" PSQL CLI COMMANDS ")}`);
    console.log(`
${chalk.greenBright("\\l")}          - show databases
${chalk.greenBright("\\c db_name")}  - connect to db
${chalk.greenBright("\\dt")}         - show tables
${chalk.greenBright("\\dt+")}        - show tables and more info
${chalk.greenBright(
  "\\d tb_name"
)}  - display more information about a specific table in a database
${chalk.greenBright("\\?")}          - show other commands
${chalk.greenBright("\\q")}          - exit CLI
${chalk.greenBright(
  ":q"
)}          - Return to psql cli from database/table/query view
`);
  });

program.parse();
