angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
//topNews
  .controller('topNewsCtrl', function($scope,$http,$cordovaSocialSharing) {
  $http.get("https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey=850de99fe1d34a3ea6b92fb4e85c540b").then(function(topNews){
    $scope.topNewslist = topNews.data.articles;
  })
   

})
//latestNews
.controller('latestNewsCtrl',function($scope,$http,$cordovaInAppBrowser,$cordovaSocialSharing, $stateParams){
  $http.get("https://newsapi.org/v1/articles?source=the-hindu&sortBy=latest&apiKey=850de99fe1d34a3ea6b92fb4e85c540b").then(function(latestNews){
    $scope.latestNewslist = latestNews.data.articles;
  })
  //In App Browser Opening
     var options = {
    location: 'yes',
    clearcache: 'no',
    toolbar: 'no'
  };
   $scope.openBrowser=function(url){
      $cordovaInAppBrowser.open(url, '_blank', options)
      .then(function(event) {
         success
      })
      .catch(function(event) {
         error
      });
    }
       //Content sharing
  $scope.shareContent=function(newsImage, title, description){
  $cordovaSocialSharing.share(title, 'subject',newsImage,description) // Share via native share sheet
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occured. Show a message to the user
    });
  }
})
//App Version 
.controller('aboutUsCtrl',function($scope,$cordovaAppVersion){
 $scope.appVersion12=function(){
    $cordovaAppVersion.getVersionNumber().then(function (version) {
    $scope.appVersion = version;
    });
   }
})

