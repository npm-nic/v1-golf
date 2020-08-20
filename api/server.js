const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const pga = require("./pga/pga-router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

app.use("/api/pga", pga);

// --> /hello <-- //
app.get("/hello", (req, res) => {
  res.send("hello world");
});

module.exports = app;
