'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    // Set the base URL for Restangular.
    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/user-login.html',
        controller: 'LoginCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/books', {
        templateUrl: 'views/books.html',
        controller: 'BooksCtrl'
      })
      .when('/books/byCat/:category', {
        templateUrl: 'views/booksByCategory.html',
        controller: 'CategoryCtrl'
      })
      .when('/books/search?title:title', {
        templateUrl: 'views/books-search.html',
        controller: 'SearchCtrl'
      })
      .when('/create/book', {
        templateUrl: 'views/book-add.html',
        controller: 'BookAddCtrl'
      })
      .when('/book/:id', {
        templateUrl: 'views/book-view.html',
        controller: 'BookViewCtrl'
      })
      .when('/cart/:id', {
        templateUrl: 'views/cart-view.html',
        controller: 'CartViewCtrl'
      })
      .when('/book/:id/edit', {
        templateUrl: 'views/book-edit.html',
        controller: 'BookEditCtrl'
      })
      .when('/book/:id/delete', {
        templateUrl: 'views/book-delete.html',
        controller: 'BookDeleteCtrl'
      })
      .when('/cart/:id/delete', {
        templateUrl: 'views/cart-delete.html',
        controller: 'CartDeleteCtrl'
      })
      .when('/carts', {
        templateUrl: 'views/carts.html',
        controller: 'CartsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('BookRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Book', function(BookRestangular) {
    return BookRestangular.service('api/books');
  })
  .factory('CartRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Cart', function(BookRestangular) {
    return BookRestangular.service('api/carts');
  })
  .directive('youtube', function() {
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      templateUrl: 'views/youtube.html'
    };
  })
  .filter('trusted', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });
