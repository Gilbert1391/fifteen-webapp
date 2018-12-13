const Joi = require("joi");
const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true
  },
  description: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true
  },
  price: {
    type: Number,
    min: 1,
    max: 100,
    required: true
  },
  category: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true
  }
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

function joiValidation(menuItem) {
  const schema = {
    title: Joi.string()
      .min(5)
      .max(50)
      .required(),
    description: Joi.string()
      .min(5)
      .max(100)
      .required(),
    price: Joi.number()
      .min(1)
      .max(100)
      .required(),
    category: Joi.string()
      .min(5)
      .max(50)
      .required()
  };

  return Joi.validate(menuItem, schema);
}

exports.MenuItem = MenuItem;
exports.joiValidation = joiValidation;
