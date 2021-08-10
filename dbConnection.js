/*
 * @Author: Ayon
 * @Date: 2021-08-10 18:31:04
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-10 22:44:01
 */

const mongoose = require("mongoose");
const uri = require("./dat/dbCredentials");

dbConnection = {};

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database Connection Successful"))
  .catch((err) => console.log(err));

module.exports = dbConnection;
