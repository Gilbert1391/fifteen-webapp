const express = require("express");
const headings = require("../routes/headings");
const menus = require("../routes/menus");
const auth = require("../routes/auth");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/heading", headings);
  app.use("/api/menus", menus);
  app.use("/api/auth", auth);
  app.use(error);
};
