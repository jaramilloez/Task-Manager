const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
});

const Type = mongoose.model("Type", typeSchema);

exports.Type = Type;
exports.typeSchema = typeSchema;
