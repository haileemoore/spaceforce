const app = angular.module("SpaceForceApp", []);

// BaseControl
app.controller =
  ("BaseControl",
  [
    "$http",
    function ($http) {
      // Global Variables
      this.hello = "Hello World!";

      // End of BaseControl
    },
  ]);
