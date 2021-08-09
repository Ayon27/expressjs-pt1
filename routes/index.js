/*
 * @Author: Ayon
 * @Date: 2021-08-08 08:43:49
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-09 17:33:32
 */

var express = require("express");
var router = express.Router();

/* GET home page. */
router.route("/").get((req, res) => {
  var name = req.query.name;
  var occupation = req.query.occupation;

  var data = {
    name: name,
    occupation: occupation,
  };

  res.render("profile", data);
});

module.exports = router;
