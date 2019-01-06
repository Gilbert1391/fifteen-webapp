const Joi = require("joi");
const mongoose = require("mongoose");

const headingSchema = new mongoose.Schema({
  heading: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true
  },
  subHeading: {
    type: String,
    minlength: 5,
    maxlength: 50
  }
});

const Heading = mongoose.model("Heading", headingSchema);

function joiValidation(heading) {
  const schema = {
    heading: Joi.string()
      .min(5)
      .max(50)
      .required(),
    subHeading: Joi.string()
      .allow("")
      .min(5)
      .max(50)
  };

  return Joi.validate(heading, schema);
}

exports.Heading = Heading;
exports.joiValidation = joiValidation;
