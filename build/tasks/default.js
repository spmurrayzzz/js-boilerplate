module.exports = function( grunt ) {

  grunt.registerTask( 'default', [
    'jshint',
    'jscs',
    'concat',
    'copy',
    'express:test',
    'blanket_mocha:dev',
    'express:test:stop',
    'requirejs'
  ]);

};
