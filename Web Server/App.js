require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const host = process.env.HOST;
const port = process.env.PORT;

const publicPath = path.join(__dirname, "/public");

app.use(express.static(publicPath));

app.get("/", (req, res, next) => {
  res.send("simple get request");
});

app.listen(port, () => {
  console.log(`server get started ${host}${port}`);
});
