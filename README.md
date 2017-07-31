# Catalog of Configurations

I dunno about you, but the bane of the JavaScript environment for me is **not** the endlessly shifting sands of package/framework/library-of-the-week, but is the act of trying to get things configured and working together.

Though many projects have some level of docs, they are often not very detailed, and rarely talk about working with other projects. The blogosphere helps, but often blog entries are undated and talking about unspecified versions of the project (which happen not to be the ones I am using).

My goal with this repository is that each time I get soemthing interesting set up in the future, I'll add a new directory with a working *simple* example.

If you stumble across this, and find it useful, let me know. Even better, if you want to contribute some configuration examples, please send me a pull request!

## Current Examples
* [TypeScript 2.3 with sourcemaps](./typescript2-sourcemaps)
	* Demonstrates setting up TypeScript 2.3 so that it generates code that can be debugged with the right source line information in the browsers.
* [Flow 0.49 with sourcemaps](./flow0.49-sourcemaps)
	* Demonstrates setting up Flow 0.49 so that it does type checking and also generates code that can be debugged with the right source line information in the browsers.
* [Flow 0.51 in ES2015 code and code coverage](./flow0.51-es2015-coverage)
	* Demonstrates getting code coverage information from running tests with source code that is es2015 with flow annotations.
