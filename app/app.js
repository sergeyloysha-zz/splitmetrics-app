/*
 * SplitMetrics App v1.0
 * https://github.com/sergeyloysha/splitmetrics-app
 * Copyright (C) 2015 Sergey Loysha <sergeyloysha@gmail.com>
 * https://github.com/sergeyloysha/splitmetrics-app/blob/master/LICENSE
 */

'use strict';

angular.module('SplitMetrics', [
  'ngRoute',
  'ngStorage',
  'SplitMetrics.filters',
  'SplitMetrics.services',
  'SplitMetrics.directives',
  'SplitMetrics.controllers',
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/signin', {
      controller: 'SigninCtrl',
      templateUrl: 'assets/views/signin.html'
    })
    .when('/signup', {
      controller: 'SignupCtrl',
      templateUrl: 'assets/views/signup.html'
    })
    .when('/reset', {
      templateUrl: 'assets/views/reset.html'
    })
    .otherwise({
      redirectTo: '/signin'
    })
}])

.constant('config', {
  apiUrl: ''
})