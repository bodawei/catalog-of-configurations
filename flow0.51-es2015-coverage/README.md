# Demonstrates a basic setup for using flow, es2015, and code coverage

## About
This provides an example of es2015+ with flow annotations and running node.js-based unit tests with Mocha and getting code coverage results with istanbul.

## Pieces
* .nycrc - Configuration file for `nyc`, the istanbul command line tool (!).  This information can be put in the `package.json` file if you prefer.
* .babelrc - Includes an istanbul-related plugin as well as a preset to process recent JavaScript code.
* .flowconfig - to configure flow
* This includes mocha and chai for unit testing.
* babel-register is also installed to do the source code transition as the tests are run.
* The `NODE_ENV` variable needs to be set to `test` when tests are run, otherwise the istanbul babel plugin will not work.

## To Do
* From your terminal, make sure you are in the directory where this README is found.
* type `npm run cover` This will run the tests and generate reports.
* While the output of the above command will show some coverage information, it is best if you then open `coverage/index.html` and drill down to see that the coverage information looks sensible.

## Notes
* There are a lot of options you can set up for nyc to change its behavior.

## Resources	
* https://flow.org/en/docs/install/
* https://istanbul.js.org/
* This example helped me a bunch: https://istanbul.js.org/docs/tutorials/es2015/

