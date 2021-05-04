const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://sam:root@mongo:27017/?authSource=admin")
  .then(() => console.log("Successfully Connected To DB"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send("<h2> Hi There! Shambhu<h2>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening On PORT ${port}`));
