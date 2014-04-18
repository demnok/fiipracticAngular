'use strict';

angular.module('angApp')
    .directive('siteMainHeader', function() {
        return {
            templateUrl: 'views/siteMainHeader.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {}
        };
    });