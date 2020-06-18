const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// Port - Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3333;

// Database - How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(express.json());
app.use(express.static("public"));

mongoose.Promise = global.Promise;
mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);

// Index
app.get("/", (req, res) => res.send("Space Force!"));

// Listener
app.listen(PORT, () =>
  console.log(`SpaceForce app listening on port ${PORT}!`)
);
