var app = angular.module('salaryCalc', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/table', {
      templateUrl: '/views/templates/table.html',
      controller: 'TableController',
      controllerAs: 'table'
    }).otherwise({ redirectTo: 'table' });
}]);

app.controller('TableController', ['$http', function($http) {
  var self = this;
  self.headers = [];
  $http.get('/db')
    .then(function (res) {
      self.data = res.data;
    }).then(function(){
      for (var key in self.data[0]) {
        self.headers.push(key);
      }
    });
}]);

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
