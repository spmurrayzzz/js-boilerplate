module.exports = {

  // run tests per-file using require
  dev: {
    options : {
      // test suite url
      urls: [ 'http://localhost:8675/test/index.html' ],
      // allow console logs to reach the grunt console
      log: true,
      // log errors to the grunt console
      logErrors: true,
      // global threshold
      globalThreshold: 100,
      // per-file threshold
      threshold : 100,
      // custom thresholds for files with unreachable code
      customThreshold: {

      },
      // console reporter
      reporter: 'Spec'
    }
  }
};
