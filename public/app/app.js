'use strict';

var app = angular.module('app', ['ngResource']);
app.controller('testCtrl', function($scope, $resource, jobs) {
    $scope.jobs = $resource('/api/jobs').query();
    $scope.submit = function() {
        var newJob = {
            title: $scope.title,
            description: $scope.description
        };
        jobs.save(newJob);
        $scope.jobs.push(newJob);
    }
});