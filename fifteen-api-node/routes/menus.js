const { Menu, joiValidation } = require("../models/menu");
const validate = require("../middleware/validate");
const validateObjectId = require("../middleware/validateObjectId");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const items = await Menu.find()
    .select("-__v")
    .sort("category");
  res.send(items);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const item = await Menu.findById(req.params.id).select("-__v");

  if (!item)
    return res.status(404).send("The Item with the given ID was not found.");

  res.send(item);
});

router.post("/", [auth, validate(joiValidation)], async (req, res) => {
  const item = new Menu({
    title: req.body.title,
    category: req.body.category,
    price: req.body.price,
    description: req.body.description
  });

  await item.save();
  res.send(item);
});

router.put(
  "/:id",
  [auth, validate(joiValidation), validateObjectId],
  async (req, res) => {
    const item = await Menu.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description
      },
      { new: true }
    );

    if (!item) {
      return res.status(404).send("The Item with the given ID was not found.");
    }

    res.send(item);
  }
);

router.delete("/:id", [auth, validateObjectId], async (req, res) => {
  const item = await Menu.findByIdAndRemove(req.params.id);

  if (!item) {
    return res.status(404).send("The Item with the given ID was not found.");
  }

  res.send(item);
});

module.exports = router;
