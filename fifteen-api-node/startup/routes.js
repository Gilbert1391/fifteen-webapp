const express = require("express");
const headings = require("../routes/headings");
const menus = require("../routes/menus");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/headings", headings);
  app.use("/api/menus", menus);
};
