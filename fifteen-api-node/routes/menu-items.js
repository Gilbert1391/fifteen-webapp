const express = require("express");
const router = express.Router();
const { MenuItem, validate } = require("../models/menu-item");

router.get("/", async (req, res) => {
  const items = await MenuItem.find().sort("name");
  res.send(items);
});

module.exports = router;
