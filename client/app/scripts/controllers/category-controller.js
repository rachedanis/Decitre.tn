'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BooksCtrl
 * @description
 * # BooksCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CategoryCtrl', function (
    $scope,
    $routeParams,
    Restangular
  ) {
    var cat = $routeParams.category;
    $scope.books = Restangular.all('api/books').customGET('',  {'category': cat}).then(function(data) {
           $scope.books = data;
       });
  });
