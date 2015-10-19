/*
 * SplitMetrics App v1.0
 * https://github.com/sergeyloysha/splitmetrics-app
 * Copyright (C) 2015 Sergey Loysha <sergeyloysha@gmail.com>
 * https://github.com/sergeyloysha/splitmetrics-app/blob/master/LICENSE
 */

'use strict';

angular.module('SplitMetrics', [
  'angular-loading-bar',
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
])

.config(['$routeProvider', 'cfpLoadingBarProvider', function($routeProvider, cfpLoadingBarProvider) {

}])

.constant('config', {

})