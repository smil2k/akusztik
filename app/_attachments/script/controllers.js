'use strict';

/* Controllers */

angular.module('akusztik.controllers', []).
        controller('AlbumController', ['$scope', '$interval', 'albumList', function($scope, $interval, albumList) {
            $scope.albumList = albumList.get();
          }]).

        controller('PlayController', ['$scope', '$interval', 'track', function($scope, $interval, track) {
            $scope.trackObject = track.get();


          }]);
