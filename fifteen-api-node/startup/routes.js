const express = require("express");
const menus = require("../routes/menu-items");
const headings = require("../routes/headings");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/headings", headings);
  app.use("/api/menus", menus);
};
