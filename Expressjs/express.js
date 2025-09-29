const express = require("express");
require("dotenv").config();
const port = process.env.port;
const host = process.env.HOST;
const app = express();

app.get("/", (req, res, next) => {
  res.send("Simple get request");
});

app.listen(port, () => {
  console.log(`server get started on ${host}:${port}`);
});
