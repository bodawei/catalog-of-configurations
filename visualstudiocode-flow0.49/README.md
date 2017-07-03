# Demonstrates setting up flow with Visual Studio Code

## About
Flow is a tool used to process type annotations to JavaScript code, and thereby report if you are making dangerous use of variables in your code.

There is a plugin for the Visual Studio Code editor/IDE which will show markers when you have type errors.

## Pieces
Packages

* flow-bin@0.49.1

Tools

* npm 5
* VS Studio Code 1.13.1 (Mac)
* Flow Language Support 0.7.0

## To Do
Setup:

* In Visual Studio Code, open the Extensions area (from the View menu)
* Search for Flow
* Click on install on the Flow Language Support
* Start the flow server with `node_modules/.bin/flow start`

(already done in this repo)

* Open Settings in Visual Studio Code
* Click on Workspace Settings
* Add these two lines

```
   "javascript.validate.enable": false,
   "flow.useNPMPackagedFlow": true
```
* Create the `.flowconfig` file with these contents:

```
[ignore]
.*/node_modules/.*

[options]
all=true
```
* Add this scripts section to `package.json`:

```
  "scripts": {
    "flow": "flow"
  },
```

(you may need to restart Visual Studio Code)

If you open `example.js` you should see two red squiggly lines under "Hello..." and "greeter(user)" in editor window.

Learning about type errors

* Modify the return value of `greeter()` to be string (`function greeter(person: Person): string {` in `example.js`). And you should immediately see the red lines disappear.

## Notes
* You must have started flow from the command line
* In my experience, if I don't say "all=true" in the `.flowconfig` file, I won't get checking, whether or not I have `// @flow` in the `example.js` file.
	* However, if I make an irrelevant change in the settings, I'll get checking for that session. Seems like a bug to me right now. Probably this: https://github.com/flowtype/flow-for-vscode/issues/139

## Resources	
* https://github.com/flowtype/flow-for-vscode
* https://flow.org/en/docs/getting-started/
