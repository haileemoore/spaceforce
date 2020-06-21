const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  vehicleClass: String,
  carrier: String,
  launchSite: String,
  launchWindow: String,
  destination: String,
  price: Number,
});

module.exports = mongoose.model("Flight", flightSchema);
