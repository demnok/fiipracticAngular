'use strict';

angular.module('angApp')
    .directive('serialsList', function() {
        return {
            templateUrl: 'views/serialsList.html',
            restrict: 'E',
            replace: true,
            link: function postLink(scope, element, attrs) {}
        };
    });
