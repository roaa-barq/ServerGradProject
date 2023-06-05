const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const packagesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("name")) {
        throw new Error('name cannot contain "name"');
      }
    },
  },
  cod: {
    type: String,
    validate(value) {
      if (!validator.isNumeric(value)) {
        throw new Error("Invalid supscription number is invalid");
      }
    },
  },
  pin: {
    type: String,
    validate(value) {
      if (!validator.isNumeric(value)) {
        throw new Error("Invalid supscription number is invalid");
      }
    },
  },
  status: {
    type: String,
    required: true,
    trim: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

packagesSchema.methods.toJSON = function () {
  const packages = this;
  const packagesObject = packages.toObject();
  delete packagesObject.tokens;
  return packagesObject;
};

const Packages = mongoose.model("Packages", packagesSchema);

module.exports = Packages;
