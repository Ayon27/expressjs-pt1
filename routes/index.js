/*
 * @Author: Ayon
 * @Date: 2021-08-08 08:43:49
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-10 22:46:54
 */

var express = require("express");
var router = express.Router();
var users = require("../dat/profiles.json");

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

// router.post("/addprofile", (req, res, send) => {
//   var body = req.body;
//   res.send(66);
// });
module.exports = router;
