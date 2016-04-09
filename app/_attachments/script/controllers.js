'use strict';

/* Controllers */

angular.module('akusztik.controllers', []).
        controller('AlbumController', ['$scope', '$interval', 'albumList', function($scope, $interval, albumList) {
            $scope.albumList = albumList.get();
          }]).

        controller('PlayController', ['$scope', '$interval', 'trackList', '$routeParams', function($scope, $interval, trackList, $routeParams) {
            if ( $scope.trackObject ) {
               console.log($scope.trackObject._id + " ? " + $routeParams.album);
            }
            if ( $scope.trackObject === undefined || $scope.trackObject._id !== $routeParams.album) {
                console.log("Loading tracklist...");
                $scope.trackObject = trackList.get({ 'doc': $routeParams.album} );
            }
            console.log("Action: "+$routeParams.track)
          }]);
