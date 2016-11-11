'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BooksCtrl
 * @description
 * # BooksCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CartsCtrl', function (
    $scope,
    Cart
  ) {
    $scope.carts = Cart.getList().$object;
  });
