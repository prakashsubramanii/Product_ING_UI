'use strict';

angular.module('policyList').factory('policyListService', ['$http', '$window', '$rootScope',
  function ($http, $window, $rootScope) {

    var policyListService = {};

    policyListService.id = 5;
    
    policyListService.getAllProducts = function () {
      // console.log(config.url);
      return $http({
        method: 'GET',
        type: 'JSON',
        url: 'products/product_groups.json'
      });
    }

    policyListService.getProductDetails = function () {
      // console.log(config.url);
      return $http({
        method: 'GET',
        type: 'JSON',
        url: 'products/product_details.json'
      });
    }
    
    return policyListService;
  }]);
