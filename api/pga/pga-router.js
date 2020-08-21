const pga = require("express").Router();
const fetch = require("node-fetch");

// --> api/pga <-- //
pga.get("/", async (req, res) => {
  try {
    // [1a]
    await fetch("https://pygolf.jacoduplessis.co.za/api")
      .then((response) => response.json())
      .then((data) => {
        data ? res.status(200).json(data) : res.status(204);
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = pga;

// [1a]
// https://www.npmjs.com/package/node-fetch