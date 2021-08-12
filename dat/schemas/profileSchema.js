/*
 * @Author: Ayon
 * @Date: 2021-08-13 01:56:33
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-13 02:06:06
 */
const mongoose = require("mongoose");

const profileSchema = {
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    trim: true,
    required: true,
  },
  team: {
    type: String,
    trim: true,
    required: true,
  },
  position: {
    type: String,
    trim: true,
    required: true,
  },
};

const profileModel = new mongoose.model("Profile", profileSchema);

module.exports = profileModel;
