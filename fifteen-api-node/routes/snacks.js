const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const validateObjectId = require("../middleware/validateObjectId");
const { MenuItem, joiValidation } = require("../models/menu-item");

router.get("/", async (req, res) => {
  const snacks = await MenuItem.find({ category: "snack" })
    .select("-__v")
    .sort("price");
  res.send(snacks);
});

router.post("/", validate(joiValidation), async (req, res) => {
  const snack = new MenuItem({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category
  });

  await snack.save();
  res.send(snack);
});

router.put(
  "/:id",
  [validate(joiValidation), validateObjectId],
  async (req, res) => {
    const snack = await MenuItem.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category
      },
      { new: true }
    );

    if (!snack) {
      return res
        .status(404)
        .send("The resource with the given ID was not found");
    }

    res.send(snack);
  }
);

router.delete("/:id", validateObjectId, async (req, res) => {
  const snack = await MenuItem.findByIdAndRemove(req.params.id);

  if (!snack) {
    return res.status(404).send("The resource with the given ID was not found");
  }

  res.send(snack);
});

module.exports = router;
