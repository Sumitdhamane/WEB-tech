import fs from "fs";

//synchronus
let filewrite = fs.writeFileSync("./writefile1.txt", "my first msg");

let fileread = fs.readFileSync("./writefile1.txt", "utf-8");

fs.appendFileSync("./writefile1.txt", "This is my second message");
console.log(fileread);

//asynchronus
fs.writeFile("./writeAsync.txt", "my first async file", (err, result) => {
  console.log("file write sucessfully: " + result);
});

fs.readFile("./writeAsync.txt", "utf-8", (err, result) => {
  console.log("file read sucessfully: " + result);
});

fs.appendFile(
  "./writeAsync.txt",
  ", this is my second message",
  (err, result) => {
    console.log("add data sucessfully: " + result);
  }
);

fs.readFile("./writeAsync.txt", "utf8", (err, result) => {
  fs.writeFile(
    "./writeAsync2.txt",
    "this my another message",
    (err, result) => {
      fs.appendFile(
        "./writeAsync2.txt",
        ", Be happy freiends",
        (err, result) => {
          console.log("add data sucessfully: " + result);
        }
      );
    }
  );
});

// fs.unlink("./writeAsync.txt");
// fs.unlinkSync("./writefile1.txt", () => {});
//folder creation
fs.mkdir("./Newfolder1", (err, result) => {});

fs.writeFile("./NewFolder1/newfile.txt", "Hello people", (err, result) => {});

// fs.rm("./NewFolder", { recursive: true, force: true }, (err) => {
//   if (err) {
//     console.error("Error deleting folder and its contents:", err);
//   } else {
//     console.log("Folder and all files inside deleted successfully!");
//   }
// });
fs.unlink("./newfile.txt", (err, result) => {});

fs.rmdir("./NewFolder", (err, result) => {
  if (err) {
    console.error("Error removing folder:", err);
  } else {
    console.log("Folder removed successfully!");
  }
});
