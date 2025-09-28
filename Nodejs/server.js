import http from "http";

let server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("server get started");
    res.end();
  } else if (req.url == "/mobile") {
    res.write("your request is for mobile");
    res.end();
  } else if (req.url == "/laptop") {
    res.write("your request is for laptop");
    res.end();
  }
});
server.listen(9999, () => {
  console.log("Server created successfully on port 9999");
});
