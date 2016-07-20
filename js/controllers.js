'use strict';

var controllers = angular.module('TrendingVideos.controllers', []);

controllers.controller('VideoCtrl', [ '$scope', '$http', function($scope, $http){
  $http.get('http://api.icndb.com/jokes/random?limitTo=[nerdy]').success(function(data) {
    $scope.todaysquote = data;
  });
}]);