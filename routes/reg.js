/*
 * @Author: Ayon
 * @Date: 2021-08-09 17:29:28
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-10 01:32:09
 */

const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

var jsonPath = path.join(__dirname, "..", "dat", "profiles.json");

var users = JSON.parse(fs.readFileSync(jsonPath));

router.route("/").post((req, res, send) => {
  var body = req.body;

  users[body.username] = body;

  fs.writeFile(jsonPath, JSON.stringify(users), (err) => {
    if (err) console.log(err);
    else console.log("written to file");
  });
  res.redirect("users");
});

module.exports = router;
