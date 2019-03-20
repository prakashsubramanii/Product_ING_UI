'use strict';

var chartList = angular.module('chartList',[]);

chartList.controller('chartListController', ['$http','$scope', '$rootScope', '$location',
    function ($http, $scope, $rootScope, $location ) {
        
    // $scope.config = {
    //     title: 'Overall Trends',
    //     tooltips: true,
    //     labels: false,
    //     mouseover: function() {},
    //     mouseout: function() {},
    //     click: function() {},
    //     legend: {
    //       display: true,
    //       //could be 'left, right'
    //       position: 'left'
    //     }
    //   };

    //   $scope.config_current = {
    //     title: 'Current Trends',
    //     tooltips: true,
    //     labels: false,
    //     mouseover: function() {},
    //     mouseout: function() {},
    //     click: function() {},
    //     legend: {
    //       display: true,
    //       //could be 'left, right'
    //       position: 'left'
    //     }
    //   };
    
    //   $scope.data = {
    //     series: ['Count', 'Percentage'],
    //     data: [{
    //       x: "Policy 1",
    //       y: [100, 50]
    //     }, {
    //       x: "Policy 2",
    //       y: [300, 20]
    //     }, {
    //       x: "Policy 3",
    //       y: [351, 30]
    //     }, {
    //       x: "Policy 4",
    //       y: [54, 60]
    //     }]
    //   };


      $scope.data_current = {
        series: ['Count', 'Percentage'],
        data: [{
          x: "Policy 1",
          y: [10, 50]
        }, {
          x: "Policy 2",
          y: [30, 60]
        }, {
          x: "Policy 3",
          y: [35, 40]
        }, {
          x: "Policy 4",
          y: [54, 33]
        }]
      };

    }]);