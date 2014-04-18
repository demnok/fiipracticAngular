'use strict';

angular.module('angApp')
  .directive('exjobs', function () {
    return {
      templateUrl: 'views/job.html',
      restrict: 'E',
      replace: true,
      scope: {
        jobModel: '=',
        stringAttr: '@'
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
