#!/usr/bin/env node
const { Command } = require("commander");
const { description, version } = require("./package.json");

const program = new Command();

program
  .name("syntax-tool")
  .description(description)
  .version(version, "-v", "-version");

program
  .command("psql")
  .description("psql cli commands")
  .action(() => {
    console.log(`
\\l          - show databases
\\c db_name  - connect to db
\\dt         - show tables
\\dt+        - show tables and more info
\\d tb_name  - display more information about a specific table in a database
\\?          - show other commands
\\q          - exit CLI
:q          - Return to psql cli from database/table/query view
`);
  });

program.parse();
