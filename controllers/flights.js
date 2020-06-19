const express = require("express");
const router = express.Router();
const Flights = require("../models/flight_model");

router.get("/", (req, res) => {
  res.send("GET request to the homepage");
});
