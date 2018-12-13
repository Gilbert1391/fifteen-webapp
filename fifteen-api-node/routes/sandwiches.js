const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const validateObjectId = require("../middleware/validateObjectId");
const { MenuItem, joiValidation } = require("../models/menu-item");

router.get("/", async (req, res) => {
  const sandwiches = await MenuItem.find({ category: "sandwich" })
    .select("-__v")
    .sort("price");
  res.send(sandwiches);
});

router.post("/", validate(joiValidation), async (req, res) => {
  const sandwich = new MenuItem({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category
  });

  await sandwich.save();
  res.send(sandwich);
});

router.put(
  "/:id",
  [validate(joiValidation), validateObjectId],
  async (req, res) => {
    const sandwich = await MenuItem.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category
      },
      { new: true }
    );

    if (!sandwich) {
      return res
        .status(404)
        .send("The resource with the given ID was not found");
    }

    res.send(sandwich);
  }
);

router.delete("/:id", validateObjectId, async (req, res) => {
  const sandwich = await MenuItem.findByIdAndRemove(req.params.id);

  if (!sandwich) {
    return res.status(404).send("The resource with the given ID was not found");
  }

  res.send(sandwich);
});

module.exports = router;
