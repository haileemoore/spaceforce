const app = angular.module("SpaceForceApp", []);

// BaseControl
app.controller("BaseControl", [
  "$http",
  function ($http) {
    // Global Variables
    console.log(this);

    this.hello = "Hello World!";

    // On Page Load
    $http({
      method: "GET",
      url: "/flights",
    }).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );

    // End of BaseControl
  },
]);
