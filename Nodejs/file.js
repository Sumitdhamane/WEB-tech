import fs from "fs";

let filewrite = fs.writeFileSync("./writefile1.txt", "my first msg");

let fileread = fs.readFileSync("./writefile1.txt", "utf-8");

let append = fs.appendFileSync("./writefile1.txt", "This is my second message");
console.log(fileread);
