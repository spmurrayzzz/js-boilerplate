module.exports = function( grunt ) {

  grunt.registerTask( 'test', [
    'jshint',
    'jscs',
    'express:test',
    'blanket_mocha:dev',
    'express:test:stop'
  ]);

};
