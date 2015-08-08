'use strict';

// Declare app level module which depends on filters, and services
angular.module('akusztik', [
  'ngRoute',
 // 'akusztik.filters',
  'akusztik.services',
  //'akusztik.directives',
  'akusztik.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/play/:album/:track', {templateUrl: 'tabs/play.html', controller: 'PlayController'});
  $routeProvider.when('/albumlist', {templateUrl: 'tabs/album.html', controller: 'AlbumController'});
  $routeProvider.otherwise({redirectTo: '/albumlist'});
}]);
