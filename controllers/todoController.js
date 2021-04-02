const Todo = require("../models/todoModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

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

exports.deleteTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findOne({ _id: req.params.id });
  if (!todo) {
    return next(new AppError("No todo found with that Id", 400));
  } else if (todo.done === false) {
    return next(new AppError("You cannot remove a Todo before complete", 400));
  } else {
    res.status(200).json({
      status: "success",
      todo,
    });
  }
});
