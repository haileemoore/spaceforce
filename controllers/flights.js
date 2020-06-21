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
  console.log('HIT SEED ROUTE')
  const newFlights =
  {
    vehicleClass: "Falcon 9",
    carrier: "SpaceX",
    launchSite: "Cape Canaveral Air Force Station",
    launchWindow: "February 15, 2020: 10:46 AM",
    destination: "Earth Orbit",
    price: 5700000,
  }

    try {
      const seedItems = await Flights.create(newFlights)
      res.redirect('/')
    } catch (err) {
      res.send(err.message)
    }
  })
