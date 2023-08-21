const chalk = require("chalk");

module.exports = function git() {
  console.log(`${chalk.bgCyanBright(" GIT CLI COMMANDS ")}`);
  console.log(`
  Setup & Initialization
  `);

  console.log(`${chalk.greenBright(
    "git init"
  )} - show modified files in working directory, staged for your next commit
${chalk.greenBright(
  "git clone [url]"
)} - retrieve an entire repository from a hosted location via URL
`);
  console.log(`
  Stage & Snapshot
  `);
  console.log(`${chalk.greenBright(
    "git status"
  )} - show modified files in working directory, staged for your next commit
${chalk.greenBright(
  "git add [file]"
)} - add a file as it looks now to your next commit (stage)
${chalk.greenBright(
  "git reset [file]"
)} - unstage a file while retaining the changes in working directory
${chalk.greenBright("git diff")} - diff of what is changed but not staged
${chalk.greenBright(
  "git diff --staged"
)} - diff of what is staged but not yet committed
${chalk.greenBright(
  "git commit -m “[descriptive message]"
)} - commit your staged content as a new commit snapshot
`);

  console.log(`
  Branch & Merge
  `);

  console.log(`${chalk.greenBright("git branch")} - list your branches
${chalk.greenBright(
  "git branch [branch-name]"
)} - create a new branch at the current commit
${chalk.greenBright(
  "git checkout"
)} - switch to another branch and check it out into your working directory
${chalk.greenBright(
  "git merge [branch]"
)} - merge the specified branch’s history into the current one
${chalk.greenBright(
  "git log"
)} - show all commits in the current branch’s history
`);
};
