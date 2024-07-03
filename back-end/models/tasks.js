const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const { severitySchema } = require("./severities");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
    maxlength: 25,
  },
  additionalInfo: {
    type: String,
    maxlength: 250,
  },
  type: {
    type: String,
    required: true,
    minlength: 3,
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
    task: Joi.string().max(25).required(),
    type: Joi.objectId().required(),
    severityId: Joi.objectId().required(),
  };
  return Joi.validate(task, schema);
}

exports.Task = Task;
exports.validate = validateTask;