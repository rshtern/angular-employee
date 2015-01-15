(function() {
    'use strict';

    var app = angular.module('punch', []);

    app.controller('employeeCtrl', ["$scope", function($scope) {
        this.data = employees;
        var employeeData = this.data;
        $scope.selected = {};
        this.jobs = jobs;
        //$scope.orderByField = 'firstName';
        $scope.reverseSort = false;

        // addEmployee function
        // the function is triggered when the user pushes the add button 
        // ng-click="addEmployee(newEmployee)"
        // newEmployee object has 3 elements: id, first name and last name employees.length
        $scope.addEmployee = function(newEmployee) {
            // newEmployee is ngModel of the form fields
            newEmployee = angular.copy(newEmployee);
            newEmployee.uniqueId = employeeData.length;
            employeeData.push(newEmployee);

            // after we add the new employee clear the fields
            $scope.newEmployee = {};
        };


        $scope.deleteEmployee = function(index) {
            employeeData.splice(index, 1);
            console.log(employeeData);
        };


        $scope.setOrderBy = function(value) {
            $scope.orderByField = value;
            $scope.reverseSort = !$scope.reverseSort;
        };

        $scope.editEmployee = function(employee) {
            employee.edit = !employee.edit;
        };


        $scope.saveEmployee = function(newEmployee, index) {
            newEmployee = angular.copy(newEmployee);
            employeeData[index] = newEmployee;
            $scope.reset(newEmployee);
        };

        $scope.reset = function(employee) {
            // reset to clean object
            $scope.selected = {};
            employee.edit = !employee.edit;
        };

    }]);
    // Custom search func
    app.filter('searchBy', [function() {
        return function(arr, searchText, prop) {
            if (!searchText) {
                return arr;
            }
            return arr.filter(function(item) {
                return item[prop].toLowerCase().indexOf(searchText) > -1;
            });
        };
    }]);

    var employees = [{
            uniqueId: 0,
            id: 3289123456,
            firstName: 'Alice',
            lastName: 'Copper',
            title: 'Front-End Developer',
            hours: 10
        }, {
            uniqueId: 1,
            id: 328234567,
            firstName: 'Bob',
            lastName: 'Smith',
            title: 'Project Manager',
            hours: 22
        }],
        selected = {},
        jobs = [

            'Front-End Developer',
            'Project Manager'
        ];
}());