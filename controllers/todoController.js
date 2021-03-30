const Todo = require("../models/todoModel");

exports.getAllTodos = async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      Hello: "World",
    },
  });
};
exports.createTodo = async (req, res) => {
  //console.log(req);
  try {
    const newTodo = await Todo.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        todo: newTodo,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
