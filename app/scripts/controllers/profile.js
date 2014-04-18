'use strict';

angular.module('angApp')
    .controller('ProfileCtrl', function($scope, $routeParams) {
        $scope.profileProperty = 'Hello from profile!';

        console.log($routeParams);
    });