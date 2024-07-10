const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const { typeSchema } = require("./types");
const { severitySchema } = require("./severities");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 25,
  },
  type: {
    type: typeSchema,
    required: true,
  },
  severity: {
    type: severitySchema,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  user: {
    type: String,
  },
});

const Task = mongoose.model("Task", taskSchema);

function validateTask(task) {
  const schema = {
    title: Joi.string().required(),
    description: Joi.string().max(25).required(),
    typeId: Joi.objectId().required(),
    severityId: Joi.objectId().required(),
  };
  return Joi.validate(task, schema);
}

exports.Task = Task;
exports.validate = validateTask;