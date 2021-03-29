exports.getAllTodos = async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      Hello: "World",
    },
  });
};
