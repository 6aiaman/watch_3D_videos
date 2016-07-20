"use strict";

var directives = angular.module('TrendingVideos.directives', []);

directives.directive('topVideo', function() {
	return {
		templateUrl: "partials/top-video.html",
		restrict: "E"
	};
});

directives.directive('videofooter', function() {
	return {
		templateUrl: "partials/footer.html",
		restrict: "E"
	};
});

directives.directive('searchForm', function() {
	return {
		templateUrl: "partials/search-form.html",
		restrict: "E"
	};
});