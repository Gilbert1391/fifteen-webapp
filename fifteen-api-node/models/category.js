const Joi = require("joi");
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: true
  }
});

function joiValidation(category) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required()
  };

  return Joi.validate(category, schema);
}

const Category = mongoose.model("Category", categorySchema);

module.exports.Category = Category;
module.exports.joiValidation = joiValidation;
