const Joi = require("joi");
const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
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

const Menu = mongoose.model("Menu", menuSchema);

function validate(menu) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required()
  };

  return Joi.validate(genre, schema);
}
