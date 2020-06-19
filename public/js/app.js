const app = angular.module("SpaceForceApp", []);

// BaseControl
app.controller("BaseControl", [
  "$http",
  function ($http) {
  // Global Variables
  const controller = this

  // On Page Load

  //======
    // editFlight
  //======

    this.editFlight = function(flight) {
      $http(
        {
            method: 'PUT',
            url: '/flights/' + flight._id,
            data:
              {
                flightNumber: this.updatedNumber,
                departureTime: this.updatedTime,
                destination: this.updatedDestination,
                price: this.updatedPrice
              }
        }
      ).then(
        function() {
          controller.getFlights()
        },
        function(error) {
          console.log(error);
        }
      )
    }

    //======
      // deleteFlight
    //======

    this.deleteFlight = function(flight) {
      $http(
        {
            method: 'DELETE',
            url: '/flights/' + flight._id
        }
      ).then(
        function(response) {
          controller.getFlights()
        },
        function(error) {
          console.log(error);
        }
      )
    }

    //======
      // getFlights
    //======

    this.getFlights = function(){
      $http(
        {
            method: 'GET',
            url: '/flights'
        }
      ).then(
        function(response) {
          controller.flights = response.data
        },
        function(error) {
          console.log(error);
        }
      )
    }

    //======
      // createFlight
    //======

    this.createFlight = function(){
      $http(
        {
            method: 'POST',
            url: '/flights',
            data:
              {
                flightNumber: this.flightNumber,
                departureTime: this.departureTime,
                destination: this.destination,
                price: this.price
              }
        }).then(
        function(response) {
          controller.getFlights()
        },
        function(error) {
          console.log(error);
        }
      )
    }

    // End of BaseControl
  },
]);
