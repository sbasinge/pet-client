'use strict';

/* Services */

//var src = "https://petfinder-basinc.rhcloud.com/dogtag";
var src = "http://localhost:3001\:3001/dogtag";

angular.module('petClient.services', ['ngResource']).
    factory('Pet', function($resource){
//        print($scope.numberPerPage);
    	return $resource(src, {}, {
    		query: {method:'JSONP', params:{callback:'JSON_CALLBACK',skip:"0",limit:10}, isArray:false}
  		});
}).value('version', '0.1');