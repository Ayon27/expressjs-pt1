/*
 * @Author: Ayon
 * @Date: 2021-08-10 18:31:04
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-10 19:52:52
 */

const mongoose = require("mongoose");
const uri = require("./dat/dbCredentials");

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(uri)
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error");
      });
  }
}

module.exports = new Database();
