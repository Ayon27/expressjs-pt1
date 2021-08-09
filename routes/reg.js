/*
 * @Author: Ayon
 * @Date: 2021-08-09 17:29:28
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-09 23:41:45
 */

var express = require("express");
var router = express.Router();

router.route("/").post((req, res, send) => {
  var body = req.body;
  // res.send(body);
  console.log(body);
  res.redirect("profile");
});

module.exports = router;
