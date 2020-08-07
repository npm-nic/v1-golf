const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

// --> /hello <-- //
app.get("/hello", (req, res) => {
  res.send("hello world");
});

module.exports = app;
