'use strict';

angular.module('angApp')
    .filter('capitalize', function() {
        return function(input) {
           /* var text_img = $(".image_identifier").text();
           
            if(text_img.search("Mr.") == 12) {
              alert("what");
              $(".profile_image").attr("background-color",blue);
            }
            else 
              if(text_img.sesarch("Ms.") == 12) {
                $(".profile_image").attr("background-color",pink);
              }*/
              

            if (input[0] == 'm' && input[1]=='r') {
                // prevent the first run when 'input' will be null
              return "Hello there Mr. " + input.substr(2);
            }
            else if (input[0]=='m' && input[1]=='s') {
              return "Hello there Ms. " + input.substr(2);
            }
                   };
    });
