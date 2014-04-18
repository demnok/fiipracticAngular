'use strict';

angular.module('angApp')
    .factory('Demo', function Demo() {
        return {
            sayHi: function(name) {
                return 'Hello ' + name + '!';
            }
        };
    });