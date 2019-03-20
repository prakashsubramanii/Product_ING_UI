//SERVICES//
    describe('policyListService', function(){
    
      // Load our app module definition before each test.
      beforeEach(module('policyList'));

      var policyListService;
    
      beforeEach(inject(function(_policyListService_) {
        policyListService  = _policyListService_;
      }));

      //check if the service is defined
      it('should exist', function(){
        expect(policyListService).toBeDefined();
      })

      //check if the field is defined with a proper value
      it('policies ID should be 5', function(){
        expect(policyListService.id).toBe(5);
      })

      //check if the getAllProducts method is defined
      it('all product list should be defined', function(){
        expect(policyListService.getAllProducts).toBeDefined();
      })

      //check if the getAllProducts method is defined
      it('all product list should be defined', function(){
        expect(policyListService.getProductDetails).toBeDefined();
      })
      
    });