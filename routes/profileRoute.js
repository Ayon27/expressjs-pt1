/*
 * @Author: Ayon
 * @Date: 2021-08-13 01:57:11
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-13 02:02:31
 */

var express = require("express");
var router = express.Router();
const checkLogin = require("../middlewares/checkLogin");

router.get("/", checkLogin, (req, res, send) => {
  res.send("helu fren");
});

module.exports = router;
