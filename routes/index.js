const express = require("express");
const router = express.Router();

router.use('/', require('./swagger'));

// Home page route
router.use("/contacts", require("./contacts"));

// About page route
router.get("/", function (req, res) {
  res.send("Victor Lopez");
});

module.exports = router;