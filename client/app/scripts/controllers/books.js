'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BooksCtrl
 * @description
 * # BooksCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('BooksCtrl', function (
    $scope,
    Book
  ) {
    $scope.books = Book.getList().$object;
  });
