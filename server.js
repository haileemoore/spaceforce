const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');
const app = express();
require("dotenv").config();

// Port - Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3333;

// Database - How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(session({
    secret:'highlyconfidential',
    resave:false,
    saveUninitialized:false
}));

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

// Controllers
const flightsController = require("./controllers/flights.js");
app.use("/flights", flightsController);

const userController = require("./controllers/users.js")
app.use("/users", userController)

const sessionController = require("./controllers/session.js")
app.use("/session", sessionController)

// Listener
app.listen(PORT, () =>
  console.log(`SpaceForce app listening on port ${PORT}!`)
);
