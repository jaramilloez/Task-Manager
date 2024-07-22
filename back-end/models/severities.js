const mongoose = require("mongoose");

const severitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  importance: {
    type: Number,
    required: true
  }
});

const Severity = mongoose.model("Severity", severitySchema);

exports.Severity = Severity;
exports.severitySchema = severitySchema;
