'use strict';

angular.module('angApp')
  .filter('greeting', function() {
    return function(input) {
      if(input) {
        return "This is a filter that does basically nothing except this: " + input;
      }
    };
  });
