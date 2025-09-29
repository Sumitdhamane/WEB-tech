const express = require("express");
require("dotenv").config();
const port = process.env.port;
const host = process.env.HOST;
const app = express();

app.get("/", (req, res, next) => {
  res.send("Simple get Home");
});
app.get("/about", (req, res, next) => {
  res.send("Simple get about");
});
app.get("/contact", (req, res, next) => {
  res.send("Simple get contact");
});
app.get("/service", (req, res, next) => {
  res.send("Simple get service");
});

app.listen(port, () => {
  console.log(`server get started at http://${host}:${port}`);
});
