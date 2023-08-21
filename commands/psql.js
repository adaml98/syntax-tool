const chalk = require("chalk");

module.exports = function psql() {
  console.log(`${chalk.bgCyanBright(" PSQL CLI COMMANDS ")}`);
  console.log(`
${chalk.greenBright("\\l")} - show databases
${chalk.greenBright("\\c [db_name]")} - connect to db
${chalk.greenBright("\\dt")} - show tables
${chalk.greenBright("\\dt+")} - show tables and more info
${chalk.greenBright(
  "\\d [tb_name]"
)} - display more information about a specific table in a database
${chalk.greenBright("\\?")} - show other commands
${chalk.greenBright("\\q")} - exit CLI
${chalk.greenBright(":q")} - Return to psql cli from database/table/query view
`);
};
