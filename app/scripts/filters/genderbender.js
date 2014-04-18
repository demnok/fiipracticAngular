'use strict';

angular.module('angApp')
  .filter('genderbender', function() {
    return function(input) {
      if(input) {
        if(input == "ms") {
          return "Hello there, lady ";
          }
          else {
            if(input == "mr") {
              return "Hey there don ";
            }
          }
      }
    };
  });
