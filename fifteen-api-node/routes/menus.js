const validate = require("../middleware/validate");
const validateObjectId = require("../middleware/validateObjectId");
const { Menu, joiValidation } = require("../models/menu");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const items = await Menu.find()
    .select("-__v")
    .sort("price");
  res.send(items);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const item = await Menu.findById(req.params.id).select("-__v");

  if (!item)
    return res.status(404).send("The Item with the given ID was not found.");

  res.send(item);
});

router.post("/", validate(joiValidation), async (req, res) => {
  const item = new Menu({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category
  });

  await item.save();
  res.send(item);
});

router.put(
  "/:id",
  [validate(joiValidation), validateObjectId],
  async (req, res) => {
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
      return res.status(404).send("The Item with the given ID was not found.");
    }

    res.send(item);
  }
);

router.delete("/:id", validateObjectId, async (req, res) => {
  const item = await Menu.findByIdAndRemove(req.params.id);

  if (!item) {
    return res.status(404).send("The Item with the given ID was not found.");
  }

  res.send(item);
});

module.exports = router;
