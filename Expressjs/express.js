const express = require("express");
require("dotenv").config();
const port = process.env.port;
const host = process.env.HOST;
const app = express();

app.get("/index.html", (req, res, next) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/about.html/:id", (req, res, next) => {
  res.sendFile(__dirname + "/about.html");
});
app.get("/contact.html", (req, res, next) => {
  res.sendFile(__dirname + "/contact.html");
});
app.get("/service.html", (req, res, next) => {
  res.sendFile(__dirname + "/service.html");
});
app.get(/.*/, (req, res, next) => {
  res.sendFile(__dirname + "/error.html");
});

app.listen(port, () => {
  console.log(`server get started at http://${host}:${port}`);
});
