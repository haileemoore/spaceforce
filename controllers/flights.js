const express = require("express");
const router = express.Router();
const Flights = require("../models/flight_model.js");

router.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

module.exports = router;
