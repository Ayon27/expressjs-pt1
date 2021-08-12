/* eslint-disable prettier/prettier */
/*
 * @Author: Ayon
 * @Date: 2021-08-10 22:46:52
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-12 20:29:18
 */

const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const tdSchema = require("../dat/schemas/tdSchema");
const checkLogin = require("../middlewares/checkLogin");

const td = new mongoose.model("td", tdSchema);

//finds and displays all entries
router.get("/", checkLogin, (req, res) => {
  // //finds and displays all info of an entry
  // td.find({ status: "active" }, (err, data) => {
  //   if (err) console.log(err);
  //   else {
  //     res.send({ success: "Successful", result: data });
  //   }
  // });

  //finds and displays selected ones
  // await td
  //   .find({ status: "active" })
  //   .select({
  //     _id: 0,
  //     __v: 0,
  //     date: 0,
  //   })
  //   .limit(1)
  //   .lean()
  //   .exec((err, data) => {
  //     if (err) console.log(err);
  //     else {
  //       res.send({ success: "Successful", result: data });
  //     }
  //   });

  //can be done like this as well. 0 means do not show
  td.find({}, { _id: 0, __v: 0, status: 0 }, (err, data) => {
    if (err) {
      console.log(err);
      res.send("Unauthorized");
    } else {
      res.send({ success: "Successful", result: data });
    }
  })
    // .limit(1)
    .lean();
});

//find single one
router.get("/:id", async (req, res) => {
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

router.post("/", (req, res) => {
  const newtd = new td(req.body);

  newtd.save((err) => {
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

router.post("/all", async (req, res) => {
  await td.insertMany(req.body, (err) => {
    if (!err) res.send("Successful");
    else {
      res.send("error");
      console.log(err);
    }
  });
});

router.put("/:id", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
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
