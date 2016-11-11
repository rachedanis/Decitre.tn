'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BooksCtrl
 * @description
 * # BooksCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('RegisterCtrl', function (
    $scope,
    User,
    $location
  ) {
    $scope.user = {};
    $scope.registerUser = function() {
      User.post($scope.user).then(function() {
        $location.path('/books');
      });
    };
  });
