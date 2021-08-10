/*
 * @Author: Ayon
 * @Date: 2021-08-10 22:46:52
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-10 23:29:22
 */

const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const tdSchema = require("../dat/schemas/tdSchema");
const td = new mongoose.model("td", tdSchema);

router.get("/", async (req, res) => {});

router.get("/:id", async (req, res) => {});

router.post("/", async (req, res) => {
  const newtd = new td(req.body);
  await newtd.save((err) => {
    if (err) {
      res.status(500).json({
        error: "server side error",
      });
    } else {
      res.status(200).json({
        success: "successfully inserted",
      });
    }
  });
});

router.post("/all", async (req, res) => {});

router.put("/:id", async (req, res) => {});

router.delete("/:id", async (req, res) => {});

module.exports = router;
