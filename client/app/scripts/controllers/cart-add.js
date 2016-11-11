'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BookAddCtrl
 * @description
 * # BookAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('CartAddCtrl', function (
  $scope,
  Cart,
  $location
) {
  //$scope.cart = {};
  $scope.saveCart = function(book) {
    Cart.post(book).then(function() {
      $location.path('/carts');
    });
  };
});
