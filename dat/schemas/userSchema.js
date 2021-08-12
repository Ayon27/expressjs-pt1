/*
 * @Author: Ayon
 * @Date: 2021-08-12 18:14:28
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-13 01:38:18
 */

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
