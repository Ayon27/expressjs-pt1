const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("port 3000 active");
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.post("/", (req, res) => {
  res.send("post method for home page");
});
