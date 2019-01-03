const Joi = require("joi");
const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
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
    min: 0,
    max: 100,
    required: true
  },
  category: {
    type: String,
    minlength: 4,
    maxlength: 50,
    required: true
  }
});

const Menu = mongoose.model("Menu", menuSchema);

function joiValidation(menu) {
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
      .min(4)
      .max(50)
      .required()
  };

  return Joi.validate(menu, schema);
}

exports.Menu = Menu;
exports.joiValidation = joiValidation;
