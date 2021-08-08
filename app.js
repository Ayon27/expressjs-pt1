/*
 * @Author: Ayon
 * @Date: 2021-08-06 21:43:43
 * @Last Modified by: Ayon
 * @Last Modified time: 2021-08-08 06:21:31
 */

//depenencies
const express = require("express");
const path = require("path");
const router = require("./routes/routes");
const env = require("dotenv");

//config
const PORT = process.env.PORT || 6969;

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(router);

//server initialization
app.listen(PORT, (err) => {
  if (!err) console.log(`server running on ${PORT}`);
  else console.log(err);
});
