const connection = require("./connection");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send("Welcome ypu all in my REST API");
});

app.get("/products", (req, res, next) => {
  //   res.send("Get request");
  //   console.log("Get request");
  connection.query("SELECT * FROM products", (error, result) => {
    if (error) throw error;
    console.log(result);

    res.send(result);
  });
});

app.get("/products/:id", (req, res, next) => {
//   res.send("Get single request");
//   console.log("Get single request");
 connection.query("SELECT * FROM products", (error, result) => {
    if (error) throw error;
    console.log(result);

   
    res.send(result);
 }
});

app.delete("/products/:id", (req, res, next) => {
  res.send("delete single request");
  console.log("delete single request");
});

app.post("/products", (req, res, next) => {
  res.send("add  request");
  console.log("add  request");
});

app.put("/products/:id", (req, res, next) => {
  res.send("put single request");
  console.log("put single request");
});

//server
app.listen(9874, () => {
  console.log("server started at 9874");
});
