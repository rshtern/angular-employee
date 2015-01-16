(function() {
    'use strict';

    var app = angular.module('punch', []);

    app.controller('employeeCtrl', ['$scope', function($scope) {
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

         $scope.editEmployee = function(employee, index) {
            // save the data of my object before change for backup and reset
            $scope.selected = angular.copy(employeeData[index]);
            employee.edit = !employee.edit;
        };

        $scope.saveEmployee = function(employee, index) {
            employeeData[index].id = employee.id;
            employeeData[index].firstName = employee.firstName;
            employeeData[index].lastName = employee.lastName;
            employeeData[index].title = employee.title;
            employee.edit = !employee.edit;
        };

        $scope.reset = function(employee, index) {
            // reset to clean object
            employee.id = $scope.selected.id;
            employee.firstName = $scope.selected.firstName;
            employee.lastName = $scope.selected.lastName;
            employee.title = $scope.selected.title;
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
        jobs = [

            'Front-End Developer',
            'Project Manager'
        ];
}());