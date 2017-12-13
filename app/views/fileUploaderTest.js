'use strict';

angular.module('myApp.fileUploaderTest', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/fileUploaderTest', {
    templateUrl: 'views/fileUploaderTest.html',
    controller: 'FileUploaderTestCtrl'
  });
}])

.controller('FileUploaderTestCtrl', [function() {

}]);