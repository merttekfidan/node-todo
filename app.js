const express = require("express");

const todoRouter = require("./routes/todoRoutes.js");

const app = express();

app.use("/api/v1/todos", todoRouter);

module.exports = app;
