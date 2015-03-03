'use strict';

var app = angular.module('app', [ngResource]);
app.controller('testCtrl', function($scope, $resource) {
    $scope.jobs = $resource.('/jobs').query();

});