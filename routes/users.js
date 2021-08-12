/*
 * @Author: Ayon
 * @Date: 2021-08-08 08:43:53
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-12 18:16:57
 */

var express = require("express");
var router = express.Router();
const fs = require("fs");

const path = require("path");

var jsonPath = path.join(__dirname, "..", "dat", "profiles.json");

var users = JSON.parse(fs.readFileSync(jsonPath));

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.render("profiles", users);
  res.send(users);
});

module.exports = router;
