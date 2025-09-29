require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const host = process.env.HOST;
const port = process.env.PORT;

const publicPath = path.join(__dirname, "/public");

app.use(express.static(publicPath));

app.get("/", (req, res, next) => {
  //   res.send("simple get request");
  res.sendFile(__dirname + "/public/html/index.html");
});
app.get("/service", (req, res, next) => {
  //   res.send("simple get request");
  res.sendFile(__dirname + "/public/html/service.html");
});
app.get("/contact", (req, res, next) => {
  //   res.send("simple get request");
  res.sendFile(__dirname + "/public/html/contact.html");
});
app.get("/about", (req, res, next) => {
  //   res.send("simple get request");
  res.sendFile(__dirname + "/public/html/about.html");
});
app.get(/.*/, (req, res, next) => {
  //   res.send("simple get request");
  res.sendFile(__dirname + "/public/html/error.html");
});

app.listen(port, () => {
  console.log(`server get started ${host}${port}`);
});
