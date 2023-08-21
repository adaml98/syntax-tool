const chalk = require("chalk");

module.exports = function gh() {
  console.log(`${chalk.bgCyanBright(" GITHUB CLI COMMANDS ")}`);
  console.log(`
  Repositories
  `);
  console.log(`${chalk.greenBright(
    "gh repo clone [repository]"
  )} - clone a repository locally
${chalk.greenBright("gh repo create [name]")} - create a new repository
${chalk.greenBright(
  "gh repo fork [repository]"
)} - create a fork or a repository
${chalk.greenBright("gh repo view [repository]")} - view a repository
`);
  console.log(`
Pull Requests
`);
  console.log(
    `${chalk.greenBright(
      "gh pr status"
    )} - show status of relevant pull requests
${chalk.greenBright("gh pr list")} - list open pull requests in repo
${chalk.greenBright("gh pr list -s all")} - list all pull requests in repo
${chalk.greenBright("gh pr view [number | url | branch]")} - view a pull request
${chalk.greenBright("gh pr checkout")} - check out a pull request in Git
${chalk.greenBright(
  "gh pr create -t [title] -b [body]"
)} - create a new pull request`
  );
  console.log(`
Issues
`);
  console.log(
    `${chalk.greenBright("gh issue status")} - show status of relevant issues
${chalk.greenBright("gh issue list")} - list open issues in repo
${chalk.greenBright("gh issue list -s all")} - list all issues in repo
${chalk.greenBright("gh issue view [number | url]")} - view an issue
${chalk.greenBright(
  "gh issue create -t [title] -b [body]"
)} - create a new issue`
  );
};
