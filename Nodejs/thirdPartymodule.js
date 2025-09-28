import chalk from "chalk";

console.log(chalk.bold.red("Hello world!"));
console.log(chalk.bold.bgCyan("Hello world!"));
console.log(chalk.underline("Hello world!"));
console.log(chalk.bgBlueBright("Hello world!"));

let freiend1 = "om",
  freiend2 = "amaan",
  freiend3 = "shreyas";

console.log(chalk.bold.bgCyan(freiend1));
console.log(chalk.bold.bgYellowBright(freiend2));
console.log(chalk.bold.bgGray(freiend3));
