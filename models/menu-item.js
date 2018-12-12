const Joi = require("joi");
const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: {
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
    minlength: 0,
    maxlength: 250
  }
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

function validate(menuItem) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required()
  };

  return Joi.validate(menuItem, schema);
}

exports.MenuItem = MenuItem;
exports.validate = validate;
