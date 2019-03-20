'use strict';

angular.module('chartList').factory('chartListService', ['$http', '$window', '$rootScope',
  function ($http, $window, $rootScope) {

    var chartListService = {};

    chartListService.id = 5;
    
    // chartListService.getMonitoringData = function () {
    //   console.log($rootScope.config);
    //   return $http({
    //     method: 'GET',
    //     type: 'JSON',
    //     url: $rootScope.config+'Produkten-ING/api/products/' 
    //   });
    // }

    return chartListService;
  }]);
