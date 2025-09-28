import chalk from "chalk";
import validator from "validator";
import prompt from "prompt";
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

let mydata = "";
let mail = "email@gmail.com";
let mail2 = "email@";

console.log(validator.isEmpty(mydata));
console.log(validator.isEmail(mail));
console.log(validator.isEmail(mail2));

prompt.start();
prompt.get(["username", "email", "password"], function (err, result) {
  if (result.username === "sumit" && result.email === "sumit@gmsil.com") {
    console.log("Login successfully");
  } else {
    console.log("not valid user");
  }
});
