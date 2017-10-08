# JavaScript, TypeScript and Karma

## About
This is intended as a demonstration of working with JavaScript and TypeScript in the same codebase, running tests with Karma, and getting coverage reports out of it.

## Pieces
* Typescript 2.5.2
* npm 5
* node 8.1.0
* Karma 1.7.1
* karma-typescript: 3.0.5
* karma-typescript-es6-transform 1.0

## To Do
* From your terminal, make sure you are in the directory where this readme is found.
* run `npm install`
* run `npm run karma`
* Look at the output in the `./temp` directory

## Notes
The key to making this work is the `karma-typescript` package, which provides the functionality needed to process TypeScript and deliver it to both Karma and coverage.

One must specify the `allowJs` flag in the `.tsconfig.json` file, or this will not work.

The `karma-typescript-es6-transform` package is used by `karma-typescript` to use babel to transform whatever JavaScript to the right form to deliver to the browser.

## Resources
* https://www.npmjs.com/package/karma-typescript
* https://github.com/adrianmarinica/karma-typescript-angularjs-sample This project helped a lot.