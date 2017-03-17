// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('letsbuy', ['ionic', 'letsbuy.controllers', 'letsbuy.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })
  .state('productDetail', {
    url: '/productDetail',
    params: {
     'Id': null,
     'Title': null
  },
    templateUrl: 'templates/productDetail.html',
    controller: 'productDetailCtrl'
  })
  .state('favourites', {
    url: '/favourites',
    templateUrl: 'templates/favourites.html',
    controller: 'favouritesCtrl'
  })
  .state('list', {
    url: '/list',
    templateUrl: 'templates/list.html',
    controller: 'listCtrl'
  })
  .state('cart', {
    url: '/cart',
    templateUrl: 'templates/cart.html',
    controller: 'cartCtrl'
  })
  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  // Each tab has its own nav history stac
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
