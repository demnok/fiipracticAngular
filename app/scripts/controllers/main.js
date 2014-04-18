'use strict';

angular.module('angApp')
    .controller('MainCtrl', function($scope, Demo) {

        // Filter integration function
        // Open up console for effect
        console.log(Demo.sayHi('user'));
       /* $scope.map = {
          center: {
            latitude: 45,
            longitude: -73
          },
          zoom: 8
        };*/
       $scope.jobsList = [{
         name: 'Job',
         vector:[
           'chestie',
           'alta chestie'
         ]},{
           name: 'Job2',
           vector:[
             'A whim',
             'Away'
           ]}
       ];
        $scope.seriesList = [{
            name: 'Front-End dev',
            actors: [
                'Front',
                'Front front'
            ],
            rating: 10
        }, {
            name: 'Frontidy front front',
            actors: [
                'Back',
                'Rear'
            ],
            rating: 8
        }, {
            name: 'Getting tired',
            actors: [
                'Of',
                'Modifying'
            ],
            rating: 9
        }, {
            name: 'Though',
            actors: [
                'I try',
                'To understand this crap'
            ],
            rating: 7
        }];

        $scope.testObject = {
            name: 'Winnie the Pooh',
            actors: [
                'Brad Pitt',
                'Another guy'
            ],
            rating: 10
        };
    });
