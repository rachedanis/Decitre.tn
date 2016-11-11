'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BookDeleteCtrl
 * @description
 * # BookDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('CartDeleteCtrl', function (
  $scope,
  $routeParams,
  Cart,
  $location
) {
  $scope.cart = Cart.one($routeParams.id).get().$object;
  $scope.deleteBook = function() {
    $scope.cart.remove().then(function() {
      $location.path('/carts');
    });
  };
  $scope.back = function() {
    $location.path('/book/' + $routeParams.id);
  };
});
