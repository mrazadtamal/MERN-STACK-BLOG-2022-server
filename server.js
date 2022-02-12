const express = require("express");
const dotenv = require("dotenv");

const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config({
  path: "config/config.env",
});

app.get("/", (req, res) => {
  res.send("all ok");
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`app listen on ${PORT}`);
  }
});
