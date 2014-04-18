'use strict';

angular.module('angApp')
    .directive('serial', function() {
        return {
            templateUrl: 'views/serial.html',
            restrict: 'E',
            replace: true,
            scope: {
                serialModel: '=',
                stringAttr: '@'
            },
            link: function postLink(scope, element, attrs) {
                console.log(scope.serialModel);
                console.log(typeof scope.stringAttr);

                scope.clickFunction = function() {
                    scope.serialModel.name = "I'll take this position thank you very much";
                      scope.serialModel.rating ++;
                    
                };
            }
        };
    });
