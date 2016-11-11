'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BookViewCtrl
 * @description
 * # BookViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('BookViewCtrl', function (
  $scope,
  $routeParams,
  Book
) {
  $scope.viewBook = true;
  $scope.book = Book.one($routeParams.id).get().$object;
});
