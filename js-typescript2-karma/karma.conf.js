// Karma configuration
// Generated on Mon Sep 04 2017 15:56:38 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
       'jasmine',
       'karma-typescript'
    ],


    // list of files / patterns to load in the browser
    files: [
      'source/**/*.js',
      'source/**/*.ts'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'source/**/*.ts': ['karma-typescript'],
      'source/**/*.js': ['coverage']
   },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
       'progress',
       'coverage',
       'karma-typescript'
    ],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // Not so obvious: https://www.npmjs.com/package/karma-typescript
    karmaTypescriptConfig: {
       reports: {
         'html': './temp/coverage/html-report',
         'json': './temp/coverage/json-report'
      }
    },

    coverageReporter: {
      dir : './temp/testCoverage/',
      reporters: [
         { type: 'json', file: 'coverage.json' },
         { type: 'json-summary', file: 'coverage-summary.json' },
         { type: 'html', subdir: 'report-html' },
         { type: 'text', subdir: '.', file: 'text.txt' },
      ],
   },

  })
}
