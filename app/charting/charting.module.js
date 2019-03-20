'use strict';

var chartList = angular.module('chartList',[]);

chartList.controller('chartListController', ['$http','$scope', '$rootScope', '$location','chartListService',
    function ($http, $scope, $rootScope, $location,chartListService ) {
        
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


      var mockData = {
        "overview": 100,
        "savings": 50,
        "mortgage": 25,
        "else": 25
    }

    $scope.dataMonitoring = [];

    for (var key in mockData) {
      if ( key !== undefined && key !== null )
              $scope.dataMonitoring.push({ 'key': key, 'value': mockData[key] });
  }

  console.log(JSON.stringify($scope.dataMonitoring));

    // var mobj = {};
    // mobj["series"] = ['Count'];
    // mobj["data"] = [];

    //   for ( var key in mockData){

    //     var dataObj = {};
    //     var arr = [];

    //     console.log(key);
    //     console.log(mockData.key);
  
    //     dataObj["x"] = key;
    //     dataObj["y"] = arr.push(mockData.key);
    //     console.log(JSON.stringify(dataObj));

    //     mobj["data"].push(dataObj);
    
    //   }
      

    //   $scope.data = mobj;
    
      $scope.data = {
        series: ['Count'],
        data: [{
          x: "savings",
          y: [50]
        }, {
          x: "mortgage",
          y: [25]
        }, {
          x: "else",
          y: [25]
        }]
      };


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