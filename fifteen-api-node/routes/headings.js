const router = require("express").Router();
const { Heading, validate } = require("../models/heading");

router.get("/", async (req, res) => {
  const headings = await Heading.find();
  res.send(headings);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const heading = await Heading.findByIdAndUpdate(
    req.params.id,
    {
      heading: req.body.heading,
      subHeading: req.body.subHeading
    },
    { new: true }
  );

  if (!heading) {
    return res.status(404).send("Resource not found");
  }

  res.send(heading);
});

module.exports = router;
