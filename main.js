// Code goes here
(function(){
  'use strict';

var app = angular.module('punch',[]);

app.controller('employeeCtrl', ["$scope", function($scope){
  this.data = employees;
  this.selected = selected;
  this.jobs = jobs;
  
      // addEmployee function
     // the function is triggered when the user pushes the add button 
     // ng-click="addEmployee(newEmployee)"
     // newEmployee object has 3 elements: id, first name and last name employees.length
		$scope.addEmployee = function(newEmployee){
        // newEmployee is ngModel of the form fields
			newEmployee = angular.copy(newEmployee);
			newEmployee.uniqueId = this.data.length;
			this.data.push(newEmployee);
			console.log(newEmployee);
		};
  $scope.orderByField = 'firstName';
  $scope.reverseSort = false;
  
  $scope.setOrderBy = function(value){
			$scope.orderByField = value;
			$scope.reverseSort = !$scope.reverseSort;
		};  

}]);
  // Custom search func
  app.filter('searchBy', [function(){
    return function(arr, searchText, prop){
      if(!searchText){
        return arr;
      }
      return arr.filter(function(item){
        return item[prop].toLowerCase().indexOf(searchText) > -1;
      });
    };
  }]);

 var employees = [
				{
					uniqueId: 0,
					id: 3289123456,
					firstName: 'Alice',
					lastName: 'Copper',
					title: 'Front-End Developer',
					hours: 10
				},
				{
					uniqueId: 1,
					id: 328234567,
					firstName: 'Bob',
					lastName: 'Smith',
					title: 'Project Manager',
					hours: 22
				}
			],
     selected = {},
     jobs =  [
            
				  'Front-End Developer',
				  'Project Manager'
				];
}());