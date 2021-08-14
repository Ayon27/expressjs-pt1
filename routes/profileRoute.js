/*
 * @Author: Ayon
 * @Date: 2021-08-13 01:57:11
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-14 22:23:42
 */

const express = require("express");
const router = express.Router();
const checkLogin = require("../middlewares/checkLogin");
const User = require("../dat/schemas/userSchema");

router.get("/", checkLogin, async (req, res, send) => {
  // res.send("helu fren");
  try {
    const data = await User.find(
      { _id: req.userId },
      { _id: 0, password: 0, __v: 0 }
    ).lean();
    res.json({ message: "Successful", result: data });
  } catch (err) {
    console.log(err);
    res.json({ message: "error" });
  }
});

module.exports = router;
