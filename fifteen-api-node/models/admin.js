const Joi = require("joi");
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: {
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
  },
  isAdmin: Boolean
});
