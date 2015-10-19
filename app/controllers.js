angular.module('SplitMetrics.controllers', [])

  .controller('AppCtrl', ['$scope', '$localStorage', 
    function($scope, $localStorage) {

      $scope.app = {

        name: 'SplitMetrics',
        footer: '© 2015 SplitMetrics',
        version: '2.0.1',

        color: {
          primary: '#7266ba',
          info:    '#23b7e5',
          success: '#27c24c',
          warning: '#fad733',
          danger:  '#f05050',
          light:   '#e8eff0',
          dark:    '#3a3f51',
          black:   '#1c2b36'
        },
        settings: {
          themeID: 1,
          navbarHeaderColor: 'bg-black',
          navbarCollapseColor: 'bg-white-only',
          asideColor: 'bg-black',
          headerFixed: true,
          asideFixed: false,
          asideFolded: false,
          asideDock: false,
          container: false
        }
      }

      if(angular.isDefined($localStorage.settings)){
        $scope.app.settings = $localStorage.settings;
      } else {
        $localStorage.settings = $scope.app.settings;
      }

      $scope.$watch('app.settings', function(){
        if($scope.app.settings.asideDock  &&  $scope.app.settings.asideFixed){

          $scope.app.settings.headerFixed = true;
        }
        $localStorage.settings = $scope.app.settings;
      }, true);

  }])

  .controller('SigninCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      // Try to login
      $http.post('api/login', {email: $scope.user.email, password: $scope.user.password})
      .then(function(response) {
        if ( !response.data.user ) {
          $scope.authError = 'Email or Password not right';
        }else{
          console.log('good');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }])

  .controller('SignupCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.user = {};
    $scope.authError = null;
    $scope.signup = function() {
      $scope.authError = null;
      // Try to create
      $http.post('api/signup', {name: $scope.user.name, email: $scope.user.email, password: $scope.user.password})
      .then(function(response) {
        if ( !response.data.user ) {
          $scope.authError = response;
        }else{
          console.log('good');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }])