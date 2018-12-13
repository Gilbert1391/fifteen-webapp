const express = require("express");
const headings = require("../routes/headings");
const snacks = require("../routes/snacks");
const sandwiches = require("../routes/sandwiches");
// const mains = require("../routes/mains");
// const cocktails = require("../routes/cocktails");
// const wines = require("../routes/wines");
// const beers = require("../routes/beers");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/headings", headings);
  app.use("/api/snacks", snacks);
  app.use("/api/sandwiches", sandwiches);
  // app.use("/api/mains", mains);
  // app.use("/api/cocktails", cocktails);
  // app.use("/api/wines", wines);
  // app.use("/api/beers", beers);
};
