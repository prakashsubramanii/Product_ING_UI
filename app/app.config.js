'use strict';

angular.
  module('myApp').
  config(['$routeProvider','$locationProvider',
    function config($routeProvider,$locationProvider) {

      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/data', {
          controller: 'policyListController',
          templateUrl: 'policy-list/product-list.template.html'
        }).
        when('/charts', {
          controller: 'chartListController',
          templateUrl: 'charting/charting.html'
        }).
        otherwise('/data');
    }
  ]);
