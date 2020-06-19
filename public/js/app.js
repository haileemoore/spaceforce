const app = angular.module("SpaceForceApp", []);

// BaseControl
app.controller("BaseControl", [
  "$http",
  function ($http) {
    // Global Variables
    this.newFlight = {};
    this.updateFlight = {};

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
    this.signup = () => {};

    // Log In
    this.login = () => {};

    // Log Out
    this.logout = () => {};

    ///////////////////////
    // On Page Load
    ///////////////////////

    this.getFlights();

    // End of BaseControl
  },
]);
