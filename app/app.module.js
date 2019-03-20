'use strict';

var myApp = angular.module('myApp',['ngRoute','angularUtils.directives.dirPagination','menuList','policyList','chartList','angularCharts']);

myApp.controller('appController', function appController($scope){

    $scope.name='My Application';
});   


// myApp.constant('config', {
//     url:'http://10.117.189.86:9080/'
// });
