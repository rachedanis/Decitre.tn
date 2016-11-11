'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BookViewCtrl
 * @description
 * # BookViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('CartViewCtrl', function (
  $scope,
  $routeParams,
  Cart
) {
  $scope.viewBook = true;
  $scope.cart = Cart.one($routeParams.id).get().$object;
});
