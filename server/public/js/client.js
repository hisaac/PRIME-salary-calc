var app = angular.module('salaryCalc', ['ngRoute']);

// app.config(['$routeProvider', function($routeProvider) {
//   $routeProvider
//     .when('/home', {
//       templateUrl: '/views/templates/home.html',
//       controller: 'HomeController',
//       controllerAs: 'home'
//     }.otherwise({
//       redirectTo: 'home'
//     });
// }]);
//
// // Home controller
// app.controller('HomeController', function() {
//   console.log('home controller running');
//   var self = this;
//   self.message = "Home controller is the bestest!";
// });
//
// // Warehouse controller
// app.controller('WarehouseController', ["$http", function($http) {
//   console.log('warehouse controller running');
//   var self = this;
//   self.message = "Warehouse controller is the best!";
//
//      $http.get('/tables/warehouse')
//       .then(function(response) {
//         console.log(response.data);
//         self.data = response.data;
//       });
// }]);
