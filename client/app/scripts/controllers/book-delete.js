'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BookDeleteCtrl
 * @description
 * # BookDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('BookDeleteCtrl', function (
  $scope,
  $routeParams,
  Book,
  $location
) {
  $scope.book = Book.one($routeParams.id).get().$object;
  $scope.deleteBook = function() {
    $scope.book.remove().then(function() {
      $location.path('/books');
    });
  };
  $scope.back = function() {
    $location.path('/book/' + $routeParams.id);
  };
});
