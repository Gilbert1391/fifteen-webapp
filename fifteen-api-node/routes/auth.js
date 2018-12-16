const { Admin, joiValidation } = require("../models/admin");
const config = require("config");
const validate = require("../middleware/validate");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

router.post("/", validate(joiValidation), async (req, res) => {
  try {
    let admin = await Admin.findOne({ username: req.body.username });
    if (!admin) return res.status(400).send("Invalid username or password.");

    const validPassword = await bcrypt.compare(
      req.body.password,
      admin.password
    );
    if (!validPassword) {
      return res.status(400).send("Invalid username or password.");
    }

    const token = jwt.sign({ _id: admin._id }, config.get("jwtPrivateKey"));
    res.header("x-auth-token", token).send(token);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
