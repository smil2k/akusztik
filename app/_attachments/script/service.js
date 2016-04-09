'use strict';

/* Services */

var services = angular.module('akusztik.services', ['ngResource']);

services.factory("albumList", ['$resource',
  function($resource) {
    return $resource('_view/byname', {}, {
      get: {method: "GET", isArray: false}
    });
  }]);

services.factory("trackList", ['$resource',
  function($resource) {
    return $resource('../../:doc', {}, {
      get: {method: "GET", params: {doc: '0'}, isArray: false}
    });
  }]);
