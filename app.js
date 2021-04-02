const express = require("express");
const todoRouter = require("./routes/todoRoutes.js");

const app = express();
const glabalErrorHandler = require("./controllers/errorController");
app.use(express.json());

app.use("/api/v1/todos", todoRouter);

app.use(glabalErrorHandler);
module.exports = app;
