'use strict';

var policyList = angular.module('policyList', ['ui.bootstrap']);

policyList.controller('policyListController', ['$http', '$scope', '$window', '$rootScope', '$location', '$uibModal', 'policyListService',
    function ($http, $scope, $window, $rootScope, $location, $uibModal, policyListService) {

        $scope.ID = 5;

        $scope.accordion = {
            current: null
          };
          
          $scope.items = [{
            name: 'List 1',
            sub: [{
              name: 'Sub 1.1'
            }, {
              name: 'Sub 1.2'
            }]
          }, {
            name: 'List 2',
            sub: [{
              name: 'Sub 2.1'
            }]
          }, {
            name: 'List 3',
            sub: [{
              name: 'Sub 3.1'
            }, {
              name: 'Sub 3.2'
            }, {
              name: 'Sub 3.3'
            }]
          }];

        init();

        function init() {

            $http.get('config.properties').then(function (response) {
                $rootScope.config = response.data.url;
                console.log($rootScope.config);

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

        $scope.changeProducts = function(){
            console.log('Product is changing');
        }
        
        $scope.open = function (policyObj) {
            $scope.policy = policyObj;

            policyListService.viewDetails(policyObj.id).then(function (success) {
                console.log(JSON.stringify(success.data));

                $scope.policyDetails = success.data;
                $scope.terms_conditions = [];

                for (var key in $scope.policyDetails.terms) {
                    $scope.terms_conditions.push({ 'key': key, 'value': $scope.policyDetails.terms[key] });
                }

                console.log(JSON.stringify($scope.terms_conditions));

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

