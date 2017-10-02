# JavaScript, TypeScript and Karma

## About
This is intended as a demonstration of working with JavaScript and TypeScript in the same codebase, running tests with Karma, and getting coverage reports out of it.

## Pieces
* Typescript 2.5.2
* npm 5
* node 8.1.0
* Karma 1.7.1
* karma-typescript: 3.0.5

## To Do
* From your terminal, make sure you are in the directory where this readme is found.
* run `npm install`
* run `npm run karma`
* Look at the output in the `./temp` directory

## Notes
The keys to making this work is the 'karma-typescript' package, which provides the functionality needed to process TypeScript and deliver it to both Karma and coverage.

One must specify the `allowJs` flag in the `.tsconfig.json` file, or this will not work.

Note also that for reasons I do not yet understand, JavaScript test files show up in the coverage output, but TypeScript test files do not.

## Resources
* https://www.npmjs.com/package/karma-typescript
* https://github.com/adrianmarinica/karma-typescript-angularjs-sample This project helped a lot. Note, though, that it suffers the same limitation about test files (it just happens to only be using TypeScript for test code)
