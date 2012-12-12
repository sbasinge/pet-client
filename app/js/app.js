'use strict';


// Declare app level module which depends on filters, and services
angular.module('petClient', ['petClient.filters', 'petClient.services', 'petClient.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/search/:phoneId', {templateUrl: 'partials/search.html', controller: MyCtrl1});
    $routeProvider.when('/list', {templateUrl: 'partials/list.html', controller: PetListCtrl});
    $routeProvider.otherwise({redirectTo: '/list'});
  }]);
