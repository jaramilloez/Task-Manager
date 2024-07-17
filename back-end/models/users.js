const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

function validateUser(user) {
  const schema = {
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  };
  return Joi.validate(user, schema);
}

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    { 
      _id: this._id, 
      name: this.name, 
      email: this.email 
    }, 
      'jwtPrivateKey'
  );
  return token;
}

const User = mongoose.model("User", userSchema);

exports.User = User;
exports.validate = validateUser;
