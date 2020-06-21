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

router.get('/seed', async (req, res) => {
  console.log('POPULATING SPACE SHIP DATA')
  const newFlights =
  [
    {
      vehicleClass: "Falcon 9",
      carrier: "SpaceX",
      launchSite: "Cape Canaveral Air Force Station",
      launchWindow: "February 15, 2020: 10:46 AM",
      destination: "Earth Orbit",
      price: 5700000,
    }, {
      vehicleClass: "Atlas V",
      carrier: "ULA",
      launchSite: "Cape Canaveral Air Force Station",
      launchWindow: "March 13th, 2020: 3:45 - 5:45PM EST",
      destination: "Sub Earth Orbit",
      price: 110000000,
    }, {
      vehicleClass: "Delta 4-Heavy",
      carrier: "ULA",
      launchSite: "Cape Canaveral Air Force Station - SLC-37B",
      launchWindow: "June 20th, 2020: 11:45AM - 2:45PM EST",
      destination: "Earth Orbit",
      price: 350000000,
    }, {
      vehicleClass: "Falcon 9",
      carrier: "SpaceX",
      launchSite: "Cape Canaveral Air Force Station",
      launchWindow: "August 5th, 2020: 9:45AM - 11:45AM EST",
      destination: "International Space Station",
      price: 350000000,
    }, {
      vehicleClass: "Soyuz",
      carrier: "Russian Space Federation, Kazakhstan",
      launchSite: "Baikonur Cosmodrome, ",
      launchWindow: "June 18th, 2020: 4:45PM - 7:45AM GMT+6",
      destination: "International Space Station",
      price: 90000000,
  }]
    try {
      const seedItems = await Flights.create(newFlights)
      res.redirect('/')
    } catch (err) {
      res.send(err.message)
    }
  })
