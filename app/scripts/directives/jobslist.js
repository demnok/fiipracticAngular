'use strict';

angular.module('angApp')
  .directive('jobsList', function () {
    return {
      templateURL: 'views/jobsList.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
