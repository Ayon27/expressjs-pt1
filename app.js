/*
 * @Author: Ayon
 * @Date: 2021-08-08 08:42:28
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-10 20:27:27
 */

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
const mongoose = require("./dbConnection");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var regRouter = require("./routes/reg");

var app = express();
// app.use(bodyParser.urlencoded({ extended: true }));;
// app.use(mongoose);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/register", regRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
