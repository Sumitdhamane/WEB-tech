// import http from "http";
// import fs from "fs";
const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
  if (req.url == "/index.html") {
    res.writeHead(200, { "content-type": "text/html" });
    let streamRead = fs.createReadStream(__dirname + "/index.html", "utf-8");
    streamRead.pipe(res);
  } else if (req.url == "/about.html") {
    res.writeHead(200, { "content-type": "text/html" });
    let streamRead = fs.createReadStream(__dirname + "/about.html", "utf-8");
    streamRead.pipe(res);
  } else if (req.url == "/service.html") {
    res.writeHead(200, { "content-type": "text/html" });
    let streamRead = fs.createReadStream(__dirname + "/service.html", "utf-8");
    streamRead.pipe(res);
  } else if (req.url == "/contact.html") {
    res.writeHead(200, { "content-type": "text/html" });
    let streamRead = fs.createReadStream(__dirname + "/contact.html", "utf-8");
    streamRead.pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Page not found");
    res.end();
  }
});

server.listen((port = 2004), () => {
  console.log(`Server created successfully on ${port}`);
});
