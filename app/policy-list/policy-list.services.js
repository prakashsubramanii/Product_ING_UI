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
        url: $rootScope.config+'Produkten-ING/api/products/' 
      });
    }

    policyListService.getProductDetails = function (productGroup, productName) {
      // console.log(config.url);
      return $http({
        method: 'GET',
        type: 'JSON',
        url: $rootScope.config+'Produkten-ING/api/product/'+productGroup+'/'+productName
      });
    }

    return policyListService;
  }]);
