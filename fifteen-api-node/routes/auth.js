const { Admin, joiValidation } = require("../models/admin");
const validate = require("../middleware/validate");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

router.post("/", validate(joiValidation), async (req, res) => {
  let admin = await Admin.findOne({ username: req.body.username });
  if (!admin) return res.status(400).send("Invalid username or password.");

  const validPassword = await bcrypt.compare(req.body.password, admin.password);
  if (!validPassword)
    return res.status(400).send("Invalid username or password.");

  //   const token = admin.generateAuthToken();
  res.send(true);
});

module.exports = router;
