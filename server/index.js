const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router");

// App setup
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server setup
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log("Start server !");
});
