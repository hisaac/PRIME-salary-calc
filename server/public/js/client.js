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
      self.totalMonthlyExpenditures = 0;
      self.data = res.data;

      //loops through data and adds all salaries to 'totalMonthlyExpenditures'
      for (var i = 0; i < res.data.length; i++) {
        self.totalMonthlyExpenditures += Number(res.data[i].salary.replace(/[^0-9\.]+/g,""));
      }

      //calculates average by dividing by total salary items
      self.totalMonthlyExpenditures /= i;
    });

  var submitEmployee = function(){
    
  };
}]);

// app.controller('FormController', ['$http', function ($http) {
//   var self = this;
//   $http.post('/db');
// }]);
