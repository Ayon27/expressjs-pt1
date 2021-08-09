/*
 * @Author: Ayon
 * @Date: 2021-08-08 08:43:49
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-09 23:45:07
 */

var express = require("express");
var router = express.Router();
var users = require("../dat/profiles");
/* GET home page. */
// router.route("/").get((req, res) => {
//   // var name = req.query.name;
//   // var occupation = req.query.occupation;

//   // var data = {
//   //   name: name,
//   //   occupation: occupation,
//   // };

//   var title = "asd";
//   res.render("index", title);
// });

router.get("/:profile/:username", (req, res, send) => {
  const profile = req.params.profile;
  const username = req.params.username;
  const currProfile = users[username];

  if (currProfile == null) {
    res.send(`Profile ${username} not found`);
  } else res.render("profile", currProfile);

  // res.send(`${username}`);
  // console.log(currProfile);
});
router.get("/profiles", (req, res, send) => {
  const profile = req.params.profile;
  const username = req.params.username;
  const currProfile = profiles[username];

  if (currProfile == null) {
    res.send(`Profile ${username} not found`);
  } else res.render("profile", currProfile);

  // res.send(`${username}`);
  // console.log(currProfile);
});

router.post("/addprofiile", (req, res, send) => {
  var body = req.body;
  res.send(body);
});
module.exports = router;
