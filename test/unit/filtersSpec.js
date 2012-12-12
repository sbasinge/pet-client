'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {
  beforeEach(module('myApp.filters'));


  describe('interpolate', function() {
    beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER');
    }));


    it('should replace VERSION', inject(function(interpolateFilter) {
      expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
    }));

  });

    describe('range', function() {
        it("should return 0 when given 0", inject(function'rangescott') {
            expect(rangscott(0,0)).toEqual(0);
        }
    });
});
