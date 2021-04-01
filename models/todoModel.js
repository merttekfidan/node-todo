const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title cannot be empty"],
  },
  description: {
    type: String,
    required: [true, "Description cannot be empty"],
  },
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
