/*
 * @Author: Ayon
 * @Date: 2021-08-08 08:43:53
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-09 23:45:44
 */

var express = require("express");
var router = express.Router();
var users = require("../dat/profiles.js");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(users);
});

module.exports = router;
