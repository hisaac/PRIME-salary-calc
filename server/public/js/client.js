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
  getEmployeeInfo();

  function getEmployeeInfo(){
    $http.get('/db')
      .then(function (res) {
        self.totalMonthlyExpenditures = 0;
        self.data = res.data;

        //loops through data and adds all salaries to 'totalMonthlyExpenditures'
        res.data.forEach(function(employee){
          //checks if employee's status is active, and only adds salary if it is
          if (employee.active){
            self.totalMonthlyExpenditures += Number(employee.salary.replace(/[^0-9\.]+/g,""));
          }
        });

        //calculates total monthly expenditures by dividing by 12
        self.totalMonthlyExpenditures /= 12;
      });
  };

  self.submitEmployee = function(formInfo){
    $http.post('/db', formInfo).then(getEmployeeInfo);
  };

  self.deleteEmployee = function(employeeToDelete){
    $http.delete('/db/' + employeeToDelete.item.employee_id).then(getEmployeeInfo);
  };

  self.toggleEmployee = function(employeeToToggle){
    $http.put('/db/' + employeeToToggle.item.employee_id).then(getEmployeeInfo);
  };
}]);
