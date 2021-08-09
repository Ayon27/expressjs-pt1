/*
 * @Author: Ayon
 * @Date: 2021-08-09 17:29:28
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-09 17:32:08
 */

var express = require("express");
var router = express.Router();

router.route("/user").post((req, res, send) => {
  var body = req.body;
  res.json(body);
});

module.exports = router;
