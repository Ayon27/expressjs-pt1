/* eslint-disable prettier/prettier */
/*
 * @Author: Ayon
 * @Date: 2021-08-10 22:46:52
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-13 01:37:52
 */

const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const td = require("../dat/schemas/tdSchema");
const checkLogin = require("../middlewares/checkLogin");

// const td = new mongoose.model("td", tdSchema);
const User = require("../dat/schemas/userSchema");

//finds and displays all entries
router.get("/", checkLogin, async (req, res) => {
  // //finds and displays all info of an entry
  // td.find({ status: "active" }, (err, data) => {
  //   if (err) console.log(err);
  //   else {
  //     res.send({ success: "Successful", result: data });
  //   }
  // });
  //finds and displays selected ones
  // newTd = await td
  //   .find()
  //   .populate("user")
  //   .select({
  //     _id: 0,
  //     __v: 0,
  //     date: 0,
  //   })
  //   // .limit(1)
  //   .lean()
  //   .exec((err, data) => {
  //     if (err) console.log(err);
  //     else {
  //       res.send({ success: "Successful", result: data });
  //     }
  //   });

  //can be done like this as well. 0 means do not show
  try {
    const data = await td
      .find({ user: req.userId }, { _id: 0, __v: 0, status: 0 })
      .populate("user", "name username -_id")
      .lean();
    res.send({ success: "Successful", result: data });
  } catch (err) {
    console.log(err);
    res.send("Unauthorized");
  }
});

//find single one
router.get("/:id", checkLogin, async (req, res) => {
  try {
    const data = await td
      .find({ _id: req.params.id }, { _id: 0, __v: 0, status: 0 })
      // .limit(1)
      .lean();
    res.json({ success: "Successful", result: data });
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});

//inserts new
router.post("/", checkLogin, async (req, res) => {
  const newtd = new td({ ...req.body, user: req.userId });
  try {
    // console.log(req.userId);
    await newtd.save();
    res.status(200).json({ message: "saved successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error" });
  }
});

//inserts more than one new
router.post("/all", checkLogin, async (req, res) => {
  await td.insertMany(req.body, (err) => {
    if (!err) res.send("Successful");
    else {
      res.send("error");
      console.log(err);
    }
  });
});

//changes one
router.put("/:id", checkLogin, async (req, res) => {
  // //doesnot return updated data
  // await td.updateOne(
  //   { _id: req.params.id },
  //   {
  //     $set: {
  //       status: "active",
  //     },
  //   },
  //   (err) => {
  //     if (err) console.log(err);
  //     else res.send("Successful");
  //   }
  // );
  var updatedDate = await td.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        status: "active",
      },
    },
    {
      new: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) console.log(err);
      else res.send("Successful");
    }
  );

  console.log(updatedDate);
});

//delets
router.delete("/:id", checkLogin, async (req, res) => {
  await td
    .deleteOne({ _id: req.params.id }, (err) => {
      if (err) {
        res.send("invalid id");
      } else {
        res.send(`Successfully deleted ${req.params.id}`);
      }
    })
    .lean();

  //findByIdAndRemove() can be used as well
});

module.exports = router;
