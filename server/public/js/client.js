var app = angular.module('salaryCalc', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/table', {
      templateUrl: '/views/templates/table.html',
      controller: 'TableController',
      controllerAs: 'table'
    }).otherwise({ redirectTo: 'table' });
}]);

app.controller('TableController', ['$http', function ($http) {
  var self = this;
  $http.get('/db')
    .then(function (res) {
      self.data = res.data;
    });
}]);

// app.controller('FormController', ['$http', function ($http) {
//   var self = this;
//   $http.post('/db');
// }]);
