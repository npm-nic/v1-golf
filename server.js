const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const pga = require('./pga/pga-router')

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

app.use('/api/pga', pga)

// --> /hello <-- //
app.get("/hello", (req, res) => {
  res.send("hello world");
});

module.exports = app;
