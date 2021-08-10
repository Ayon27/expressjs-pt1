/*
 * @Author: Ayon
 * @Date: 2021-08-10 18:31:04
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-10 21:39:28
 */

const mongoose = require("mongoose");
const uri = require("./dat/dbCredentials");

dbConnection = {};

mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Database Connection Successful");
    else console.log(err);
  }
);

module.exports = dbConnection;
