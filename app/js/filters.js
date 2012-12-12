'use strict';

/* Filters */

angular.module('petClient.filters', []).
//  filter('interpolate', ['version', function(version) {
//    return function(text) {
//      return String(text).replace(/\%VERSION\%/mg, version);
//    }
//  }]
    filter('rangescott', function() {
        return function(total, numberPerPage) {
            var input = [];
            total = parseInt(total/numberPerPage)+1;
            for (var i=0; i<total; i++)
                input.push(i);
            return input;
        };    }
);

//var petClient = angular.module('petClient.filters', []);

//petClient.filter('range',function(count) {
//   console.log("Hello from filter "+count);
//});

//petClient.filter('version', function(version) {
//    return function(text) {
//        return String(text).replace(/\%VERSION\%/mg, version);
//    }
//    }
//);

