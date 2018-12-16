const { Menu, joiValidation } = require("../models/menu");
const validate = require("../middleware/validate");
const validateObjectId = require("../middleware/validateObjectId");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const items = await Menu.find()
      .select("-__v")
      .sort("price");
    res.send(items);
  } catch (ex) {
    next(ex);
  }
});

router.get("/:id", validateObjectId, async (req, res) => {
  try {
    const item = await Menu.findById(req.params.id).select("-__v");

    if (!item)
      return res.status(404).send("The Item with the given ID was not found.");

    res.send(item);
  } catch (ex) {
    next(ex);
  }
});

router.post("/", [auth, validate(joiValidation)], async (req, res) => {
  try {
    const item = new Menu({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category
    });

    await item.save();
    res.send(item);
  } catch (ex) {
    next(ex);
  }
});

router.put(
  "/:id",
  [auth, validate(joiValidation), validateObjectId],
  async (req, res) => {
    try {
      const item = await Menu.findByIdAndUpdate(
        req.params.id,
        {
          title: req.body.title,
          description: req.body.description,
          price: req.body.price,
          category: req.body.category
        },
        { new: true }
      );

      if (!item) {
        return res
          .status(404)
          .send("The Item with the given ID was not found.");
      }

      res.send(item);
    } catch (ex) {
      next(ex);
    }
  }
);

router.delete("/:id", [auth, validateObjectId], async (req, res) => {
  try {
    const item = await Menu.findByIdAndRemove(req.params.id);

    if (!item) {
      return res.status(404).send("The Item with the given ID was not found.");
    }

    res.send(item);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
