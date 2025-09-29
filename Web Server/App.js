require("dotenv").config();
const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();
const host = process.env.HOST;
const port = process.env.PORT;

const publicPath = path.join(__dirname, "/public");
const viewPath = path.join(__dirname, "/templates/views");
const partialPath = path.join(__dirname, "/templates/partials");

app.use(express.static(publicPath));
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

app.get("/", (req, res, next) => {
  //   res.send("simple get request");
  //res.sendFile(__dirname + "/public/html/index.html");
  res.render("index", { dev: "Sumit", title: "Home Page" });
});
app.get("/service", (req, res, next) => {
  //   res.send("simple get request");
  //res.sendFile(__dirname + "/public/html/service.html");
  res.render("service", { dev: "Sumit" });
});
app.get("/contact", (req, res, next) => {
  //   res.send("simple get request");
  // res.sendFile(__dirname + "/public/html/contact.html");
  res.render("contact", { dev: "Sumit" });
});
app.get("/about", (req, res, next) => {
  //   res.send("simple get request");
  // res.sendFile(__dirname + "/public/html/about.html");
  res.render("about", { dev: "Sumit" });
});
app.get(/.*/, (req, res, next) => {
  //   res.send("simple get request");
  // res.sendFile(__dirname + "/public/html/error.html");
  res.render("error", { dev: "Sumit" });
});

app.listen(port, () => {
  console.log(`server get started ${host}${port}`);
});
