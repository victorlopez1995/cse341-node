const express = require("express");
const router = express.Router();

// Home page route
router.get("/", function (req, res) {
  res.send("Victor Lopez");
});

// About page route
router.get("/other", function (req, res) {
  res.send("BYU-Idaho");
});

module.exports = router;