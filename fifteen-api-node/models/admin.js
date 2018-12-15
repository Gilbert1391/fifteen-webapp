const Joi = require("joi");
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true
  },
  password: {
    type: String,
    minlength: 5,
    maxlength: 1000,
    required: true
  }
});

const Admin = mongoose.model("Admin", adminSchema);

function joiValidation(admin) {
  const schema = {
    username: Joi.string()
      .min(5)
      .max(255)
      .required(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };

  return Joi.validate(admin, schema);
}

exports.Admin = Admin;
exports.joiValidation = joiValidation;
