'use strict';

var policyList = angular.module('policyList', ['ui.bootstrap']);

policyList.controller('policyListController', ['$http', '$scope', '$window', '$rootScope', '$location', '$uibModal', 'policyListService',
    function ($http, $scope, $window, $rootScope, $location, $uibModal, policyListService) {

        $scope.ID = 5;

        $scope.accordion = {
            current: null
          };
          
        init();

        function init() {

            $http.get('config.properties').then(function (response) {

                $rootScope.config = response.data.url;

                policyListService.getAllProducts()
                    .then(function (success) {
                        $scope.productgroups = success.data;
                        console.log(JSON.stringify($scope.productgroups));
                    },
                        function (error) {
                            alert('Error in details page');
                        });
            });
        }
        
        $scope.open = function (productGroup, productName) {


            $scope.productGroup = productGroup;
            $scope.productName = productName;


            policyListService.getProductDetails(productGroup,productName).then(function (success) {
                console.log(JSON.stringify(success.data));

                $scope.productDetails = success.data;
                $scope.prodDetails = [];

                for (var key in $scope.productDetails) {
                    if ( key !== undefined && key !== null && key !== "productGroup" && key !== "otherProducts" && key !== "productName")
                            $scope.prodDetails.push({ 'key': key, 'value': $scope.productDetails[key] });
                }

                console.log(JSON.stringify($scope.prodDetails));

                var modalInstance = $uibModal.open({
                    templateUrl: "policy-list/modalContent.html",
                    controller: "ModalContentCtrl",
                    scope: $scope,
                    size: '',
                });

                modalInstance.result.then(function (response) {
                    $scope.result = `${response} button hitted`;
                });
            },
                function (error) {
                    alert('Error in details page');
                });
        };
    }]);

    policyList.controller('ModalContentCtrl', function ($scope, $uibModalInstance, policyListService) {

        $scope.cancel = function () {

            $uibModalInstance.close("Ok");
            $uibModalInstance.dismiss();
        }
        
    });