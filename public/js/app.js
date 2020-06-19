const app = angular.module("SpaceForceApp", []);

// BaseControl
app.controller("BaseControl", [
  "$http",
  function ($http) {
    // Global Variables
    this.newFlight = {};
    const controller = this

    //======
    // editFlight
    //======
    this.editFlight = (flight) => {
      $http({
        method: "PUT",
        url: "/flights/" + flight._id,
        data: {
          flightNumber: this.updatedNumber,
          departureTime: this.updatedTime,
          destination: this.updatedDestination,
          price: this.updatedPrice,
        },
      }).then(
        function () {
          this.getFlights();
        },
        function (error) {
          console.log(error);
        }
      );
    };

    //======
    // deleteFlight
    //======
    this.deleteFlight = (flight) => {
      $http({
        method: "DELETE",
        url: "/flights/" + flight._id,
      }).then(
        function (response) {
          this.getFlights();
        },
        function (error) {
          console.log(error);
        }
      );
    };

    //======
    // getFlights
    //======
    this.getFlights = () => {
      $http({
        method: "GET",
        url: "/flights",
      }).then(
        function (response) {
          controller.flights = response.data;
          console.log(controller.flights);
        },
        function (error) {
          console.log(error);
        }
      );
    };

    //======
    // createFlight
    //======
    this.createFlight = () => {
      $http({
        method: "POST",
        url: "/flights",
        data: this.newFlight,
      }).then(
        function (response) {
          this.newFlight = {};
          this.getFlights();
        },
        function (error) {
          console.log(error);
        }
      );
    };

    // On Page Load
    this.getFlights();

    // End of BaseControl
  },
]);
