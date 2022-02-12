const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("all ok");
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log("app listen on 5000");
  }
});
