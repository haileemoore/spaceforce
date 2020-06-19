const app = angular.module("SpaceForceApp", []);

// BaseControl
// app.controller("BaseControl", [
//   function () {
//     // Path Function
//     this.changePath = (path) => {
//       this.includePath = "partials/" + path + ".html";
//     };
//   },
// ]);

// FlightsControl
app.controller("FlightsControl", [
  "$http",
  function ($http) {
    // Global Variables
    this.newFlight = {};
    this.updateFlight = {};
    this.loggedInUser = false;

    ///////////////////////
    // CRUD FOR FLIGHTS
    ///////////////////////

    // Create
    this.createFlight = () => {
      $http({
        method: "POST",
        url: "/flights",
        data: this.newFlight,
      }).then(
        (response) => {
          this.newFlight = {};
          this.getFlights();
        },
        (error) => {
          console.log(error);
        }
      );
    };

    // Read
    this.getFlights = () => {
      $http({
        method: "GET",
        url: "/flights",
      }).then(
        (response) => {
          this.flights = response.data;
          console.log(this.flights);
        },
        (error) => {
          console.log(error);
        }
      );
    };

    // Update
    this.editFlight = (flight) => {
      $http({
        method: "PUT",
        url: "/flights/" + flight._id,
        data: this.updateFlight,
      }).then(
        () => {
          this.getFlights();
        },
        (error) => {
          console.log(error);
        }
      );
    };

    // Delete
    this.deleteFlight = (flight) => {
      $http({
        method: "DELETE",
        url: "/flights/" + flight._id,
      }).then(
        (response) => {
          this.getFlights();
        },
        (error) => {
          console.log(error);
        }
      );
    };

    ///////////////////////
    // AUTHENTICATION (Sign Up, Log In, Log Out)
    ///////////////////////

    // Sign Up
    this.signup = () => {
      $http({
        url: "/users",
        method: "POST",
        data: {
          username: this.signupUsername,
          password: this.signupPassword,
        },
      }).then(function (response) {
        console.log(response);
        controller.loggedInUser = response.data;
      });
    };

    // Log In
    this.login = () => {
      $http({
        url: "/session",
        method: "POST",
        data: {
          username: this.loginUsername,
          password: this.loginPassword,
        },
      }).then(function (response) {
        if (response.data.username) {
          controller.loggedInUser = response.data;
        } else {
          controller.loginUsername = null;
          controller.loginPassword = null;
        }
      });
    };

    // Log Out
    this.logout = () => {
      $http({
        url: "/session",
        method: "DELETE",
      }).then(function () {
        controller.loggedInUser = false;
      });
    };

    ///////////////////////
    // On Page Load
    ///////////////////////

    this.getFlights();

    // End of BaseControl
  },
]);
