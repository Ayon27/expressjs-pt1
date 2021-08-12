/*
 * @Author: Ayon
 * @Date: 2021-08-12 18:18:07
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-12 19:49:40
 */

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = require("../dat/schemas/userSchema");
const { token } = require("morgan");
const User = new mongoose.model("user", userSchema);

//signup
router.post("/signup", async (req, res) => {
  try {
    const hashedPwd = await bcrypt.hash("helo", 10);

    const newUser = new User({
      name: req.body.name,
      username: req.body.username,
      password: hashedPwd,
    });

    await newUser.save();
    res.status(200).send("user saved");
  } catch (err) {
    console.log(err);
    res.send("failec");
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.find({ username: req.body.username });
    // console.log(user[0].username);
    if (user && user.length > 0) {
      const isValidPwd = await bcrypt.compare(
        req.body.password,
        user[0].password
      );

      if (isValidPwd) {
        const token = jwt.sign(
          { username: user[0].username, userId: _id },
          process.env.SECRET,
          {
            expiresIn: "1h",
          }
        );

        res.status(200).json({
          "access-token": token,
          message: "successful",
        });
      } else {
        res.status(401).json({
          error: "Invalid username and password",
        });
      }
    } else {
      res.status(401).json({
        error: "Invalid username and password",
      });
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
