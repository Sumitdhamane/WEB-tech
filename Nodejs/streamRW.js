import fs from "fs";
import http from "http";

let myReadStream = fs.createReadStream(
  __dirname + "/writeAsync.txt",
  "utf-8",
  (err, result) => {}
);
let myWriteStream = fs.createWriteStream(
  __dirname + "/writeStreamData.txt",
  () => {}
);
myReadStream.on("data", (chunk) => {
  writeStream.write(chunk);
});
