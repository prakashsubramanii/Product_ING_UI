'use strict';

var chartList = angular.module('chartList',[]);

chartList.controller('chartListController', ['$http','$scope', '$rootScope', '$location',
    function ($http, $scope, $rootScope, $location ) {
        
    $scope.config = {
        title: 'Monitoring',
        tooltips: true,
        labels: false,
        mouseover: function() {},
        mouseout: function() {},
        click: function() {},
        legend: {
          display: true,
          //could be 'left, right'
          position: 'left'
        }
      };

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

      var mockData = {
        "overview": 100,
        "savings": 50,
        "mortgage": 25,
        "else": 25
    }

    var mobj = {};
    mobj["series"] = ['Count'];
    mobj["data"] = [];

      for ( var key in mockData){

        var dataObj = {};
        var arr = [];
  
        dataObj["x"] = key;
        dataObj["y"] = arr.push(mockData[key]);
        // console.log(JSON.stringify(dataObj));

        mobj["data"].push(dataObj);
    
      }
      

      $scope.data = mobj;
    
      // $scope.data = {
      //   series: ['Count'],
      //   data: [{
      //     x: "Product 1",
      //     y: [100]
      //   }, {
      //     x: "Product 2",
      //     y: [300]
      //   }, {
      //     x: "Product 3",
      //     y: [351]
      //   }, {
      //     x: "Product 4",
      //     y: [54]
      //   }]
      // };


      // $scope.data_current = {
      //   series: ['Count', 'Percentage'],
      //   data: [{
      //     x: "Policy 1",
      //     y: [10, 50]
      //   }, {
      //     x: "Policy 2",
      //     y: [30, 60]
      //   }, {
      //     x: "Policy 3",
      //     y: [35, 40]
      //   }, {
      //     x: "Policy 4",
      //     y: [54, 33]
      //   }]
      // };

    }]);