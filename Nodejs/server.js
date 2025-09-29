import http from "http";
import fs from "fs";

let server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("server get started");
    res.end();
  } else if (req.url == "/iframe.html") {
    fs.readFile("./iframe.html", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("404 Not Found");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      }
      res.end(); // ✅ always end response
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Page not found");
    res.end();
  }
});

server.listen(9999, () => {
  console.log("Server created successfully on port 9999");
});
