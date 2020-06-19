const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  flightNumber: Number,
  departureTime: String,
  destination: String,
  price: Number,
});

module.exports = mongoose.model("Flight", flightSchema);
