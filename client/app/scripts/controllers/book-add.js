'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BookAddCtrl
 * @description
 * # BookAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('BookAddCtrl', function (
  $scope,
  Book,
  $location
) {
  $scope.book = {};
  $scope.saveBook = function() {
    Book.post($scope.book).then(function() {
      $location.path('/books');
    });
  };
});
