'use strict';

/* jasmine specs for controllers go here */

  describe('policyListController', function(){

    beforeEach(module('policyList'));

    it('should equate to the scope ID to 5', inject(function($controller) {
          var scope = {}; var ctrl;
          ctrl = $controller('policyListController', {$scope:scope});
          expect(scope.ID).toBe(5);
    }));

  });
