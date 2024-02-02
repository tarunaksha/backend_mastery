const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    const myUrl = url.parse(req.url, true);
    //    console.log(myUrl);
    const logger = `${Date.now()}: '${req.url}' is requested\n`;
    fs.appendFile("log.txt", logger, (err, data) => {
      switch (myUrl.pathname) {
        case "/":
          res.end("Hello from home");
          break;
        case "/about":
          const user = myUrl.query.user_name;
          console.log(user);
          res.end(`hello  mr ${user}`);

          break;
        case "/contact":
          res.end("contact us");
          break;
        case "/users":
          res.end("Hello from users");
          break;
        default:
          res.end("bye bye");
          break;
      }
    });
  })
  .listen(8000, () => {
    console.log("server is up and spinning");
  });




