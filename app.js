/*
 * @Author: Ayon
 * @Date: 2021-08-06 21:43:43
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-07 00:36:43
 */

const express = require("express");

const app = express();

app.set("view engine", "ejs");

app
  .route("/home")
  .get((req, res) => {
    res.render("index");
  })
  .post((req, res) => {
    res.send("no file found");
  });

app.listen(3000, () => {});
console.log("listening on port " + 3000);
