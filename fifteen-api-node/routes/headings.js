const { Heading, joiValidation } = require("../models/heading");
const validate = require("../middleware/validate");
const validateObjectId = require("../middleware/validateObjectId");
const auth = require("../middleware/auth");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const headings = await Heading.find().select("-__v");
  res.send(headings);
});

router.put(
  "/:id",
  [auth, validate(joiValidation), validateObjectId],
  async (req, res) => {
    const heading = await Heading.findByIdAndUpdate(
      req.params.id,
      {
        heading: req.body.heading,
        subHeading: req.body.subHeading
      },
      { new: true }
    );

    if (!heading) {
      return res.status(404).send("The item was not found");
    }

    res.send(heading);
  }
);

module.exports = router;
