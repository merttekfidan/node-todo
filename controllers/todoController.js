const Todo = require("../models/todoModel");

exports.getAllTodos = async (req, res, next) => {
  const todos = await Todo.find();
  res.status(200).json({
    status: "success",
    data: {
      todos,
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

exports.toggleTodo = async (req, res) => {
  try {
    const currentTodo = await Todo.findById(req.params.id);
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { done: !currentTodo.done, updatedAt: Date.now() },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      currentTodo: !currentTodo.done,
      data: {
        todo,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
