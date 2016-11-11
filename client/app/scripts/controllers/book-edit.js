'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BookEditCtrl
 * @description
 * # BookEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('BookEditCtrl', function (
  $scope,
  $routeParams,
  Book,
  $location
) {
  $scope.editBook = true;
  $scope.book = {};
  Book.one($routeParams.id).get().then(function(book) {
    $scope.book = book;
    $scope.saveBook = function() {
      $scope.book.save().then(function() {
        $location.path('/book/' + $routeParams.id);
      });
    };
  });
});
