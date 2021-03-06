// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])

.run(function($ionicPlatform,$rootScope, $cordovaNetwork) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
   // var isOnline = $cordovaNetwork.isOnline();
  //  alert(isOnline);
  });

})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.content', {
      url: '/content',
      views: {
        'menuContent': {
          templateUrl: 'templates/content.html',
          controller: 'latestNewsCtrl'
        }
      }
    })
    .state('app.latestNews', {
      url: '/latestNews', 
      views: {
        'menuContent': {
          templateUrl: 'templates/latestNews.html',
          controller: 'latestNewsCtrl'
        }
      }
    })
    

  .state('app.topNews', {
    url: '/topNews',
    views: {
      'menuContent': {
        templateUrl: 'templates/topNews.html',
        controller: 'topNewsCtrl'
      }
    }
  })
      .state('app.aboutUs', {
      url: '/aboutUs',
      views: {
        'menuContent': {
          templateUrl: 'templates/aboutUs.html',
          controller: 'aboutUsCtrl'
        }
      }
    });
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/latestNews');
});
