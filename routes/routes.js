/*
 * @Author: Ayon
 * @Date: 2021-08-08 05:42:02
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-08 05:52:41
 */

const express = require("express");
const router = express.Router();

router.route("/").get((req, res, send) => {
  res.render("index");
});

module.exports = router;
