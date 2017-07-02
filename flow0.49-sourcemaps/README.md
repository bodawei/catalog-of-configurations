# Demonstrates a basic setup for using flow

## About
Flow is a tool used to process type annotations to JavaScript code, and thereby report if you are making dangerous use of variables in your code.

This demonstrates a working flow setup that preserves source map information as far as debugging code in the browser.

## Pieces
Packages

* babel-cli@6.24.1
* babel-preset-flow@6.23.0
* flow-bin@0.49.1

Tools

* npm 5
* node 8.1.0
* Browser

## To Do
Setup:

* From your terminal, make sure you are in the directory where this readme is found.
* Create a `.babelrc` file to tell babel to remove any flow annotations `{ "presets": ["flow"] }`
   * Babel is needed to remove all the flow additions to your code so that latter code manipulations will not get confused
* Create a `.flowconfig` file
	* flow requires this to figure out where the root of the directory is
   * In this example, there is an `[options]` `all=true` entry in the file so all `.js` files are scanned. However, if you are incrementally adding flow to a project, you can mark individual files that are ready for scanning by putting `// @flow` at the top of each file
   * **crucially** this also  should have an `[ignore]` section with `.*/node_modules/.*` in it so it does not scan the contents of `node_modules`. (remove that and run `flow check` to see how slow it gets withuot this protection)

Learning about type errors

* Start the flow server with `node_modules/.bin/flow start`
* Run a check on the source code by typing `node_modules/.bin/flow check`
* You might modify the return value of `greeter()` to be number (`function greeter(person: Person): number {` and run the check again to see errors generated

Examining source maps

* Run `node_modules/.bin/babel source/ --source-maps -d generated/`
* `cp source/example.html transpiled/`
* Open `generated/example.html` in the browser

## Notes
* Flow runs a server in the background. This keeps some state of your project in memory so it can respond to changes more quickly.
* The flow server will take an ***incredible*** amount of time to start up (seriously, do it before going to lunch. I've had it take an hour). Fortunately, it is fast thereafter. 
* The flow server doesn't seem to have a 'watch' mode, which means you need to run it by hand to get checks
* However, some editors apparently provide support for showing flow errors while you are editing.

## Resources	
* https://flow.org/en/docs/install/

## Editorial
While I dislike littering my project directory with everyone's magic files (gruntfile, gulpfile, package.json, etc etc), adding invisible '.' files is even more irritating to me. When something goes wrong, you need to remember that there is some magic invisible file that might be influencing what's going on.

