const express = require("express");
const todoController = require("./../controllers/todoController.js");

const router = express.Router();

router
  .route("/")
  .get(todoController.getAllTodos)
  .post(todoController.createTodo);
module.exports = router;
