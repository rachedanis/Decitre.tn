'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BooksCtrl
 * @description
 * # BooksCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', function (
    $scope,
    Restangular
  ) {
    $scope.user = { username: "", password: ""};
    $scope.login = function () {
    user = Restangular.one('user');
    user.post('login', $scope.user);
    console.log('Posted to login method');
  };
  });
