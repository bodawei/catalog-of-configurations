// Karma configuration
// Generated on Mon Sep 04 2017 15:56:38 GMT-0700 (PDT)

module.exports = function(config) {
   config.set({

      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: "",

      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: [
         "jasmine",
         "karma-typescript"  // while this is loaded either way, it needs to be listed here for some reason
      ],

      // list of files / patterns to load
      files: [
         "source/**/*.js",
         "source/**/*.ts"
      ],

      // list of files to exclude
      exclude: [
      ],

      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
         "source/**/*.ts": ["karma-typescript"],
         "source/**/*.js": ["karma-typescript"]
      },

      // test results reporter to use
      // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      reporters: [
         "progress",
         "karma-typescript"
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
      browsers: ["Chrome"],

      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: true,

      // Concurrency level
      // how many browser should be started simultaneous
      concurrency: Infinity,

      // https://www.npmjs.com/package/karma-typescript
      karmaTypescriptConfig: {
         tsconfig: "./tsconfig.json",
         bundlerOptions: {
            sourceMap: true,
            transforms: [
               require("karma-typescript-es6-transform")({
                  presets: ["env"]
               })
           ]
         },
         coverageOptions: {
            // Exclude both .js an .ts test files from the coverage reports
            exclude: /\.(d|spec|test)\.(ts|js)$/i
         },
         reports: {
            "html": "./temp/coverage/html-report",
            "json": "./temp/coverage/json-report"
         }
      },

   })
}
