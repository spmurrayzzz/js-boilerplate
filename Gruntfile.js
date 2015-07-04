module.exports = function( grunt ) {

  grunt.initConfig({
    // read package.json
    pkg: grunt.file.readJSON('package.json'),
    // linting
    jshint: require('./build/config/jshint'),
    // style checker
    jscs: require('./build/config/jscs'),
    // concat files
    concat: require('./build/config/concat'),
    // copy files
    copy: require('./build/config/copy'),
    // requirejs optimizer
    requirejs: require('./build/config/requirejs'),
    // test server
    express: require('./build/config/express'),
    // mocha tests
    'blanket_mocha': require('./build/config/mocha'),
    // watch config
    watch: require('./build/config/watch')
  });

  // load npm plugins (all dependencies that match /^grunt/)
  require('load-grunt-tasks')( grunt );

  // load custom tasks
  grunt.loadTasks('./build/tasks');

};
