define(function( require ){

  var index = require('src/js/index');

  describe( 'base', function() {

    it( 'should be an object', function() {
      assert.deepEqual( index, {} );
    });

  });

});
