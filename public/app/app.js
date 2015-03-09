'use strict';

var app = angular.module('app', ['ngResource']);
app.controller('testCtrl', function($scope, $resource, jobs) {
    $scope.jobs = $resource('/api/jobs').query();
    var newJob = {
        title: 'test title',
        description: 'test description'
    };
    jobs.save(newJob);
});