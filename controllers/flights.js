const express = require("express");
const router = express.Router();
const Flights = require("../models/flight_model.js");

// Create
router.post("/", (req, res) => {
  Flights.create(req.body, (err, createFlight) => {
    res.json(createFlight);
  });
});

// Read
router.get("/", (req, res) => {
  Flights.find({}, (err, findFlight) => {
    res.json(findFlight);
  });
});

// Update
router.put("/:id", (req, res) => {
  Flights.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updateFlight) => {
      res.json(updateFlight);
    }
  );
});

// Delete
router.delete("/:id", (req, res) => {
  Flights.findByIdAndDelete(req.params.id, (err, deleteFlight) => {
    res.json(deleteFlight);
  });
});

module.exports = router;
