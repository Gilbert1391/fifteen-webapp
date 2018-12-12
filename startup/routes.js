const express = require("express");
const menus = require("../routes/menu-items");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/menus", menus);
};
