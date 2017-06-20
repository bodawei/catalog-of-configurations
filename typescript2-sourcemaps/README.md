## Demonstrates using TypeScript and getting source map support in the browser.

## Pieces
* Typescript 2.3.4
* npm 5
* node 8.1.0
* Browser
* tsconfig.json : has a flag which turns on source maps


## To Do
* From your terminal, make sure you are in the directory where this readme is found.
* run `npm run tsc`
* open source/example.html in your browser
* In the debugging tools, you can put a breakpoint and debug in TypeScript

## Browser Notes
* Chrome and kin (v59)
	* You'll see both the example.js and example.ts file in the Sources tab (on the left column) in the Sources (debugger) tab in the Chrome dev tools.
* FireFox Debugger (v53)
	* This seems to show only the .ts file in the Debugger tab. You'll note that the original script tag has been elided from the Elements view.
* Safari Debugger (v10)
	* The debugger only shows the example.js file.  However you can see both in the Resources tab
* Edge
   * Evidently shows source mapped files by default
	
## Resources	
* https://stackoverflow.com/questions/19550060/how-do-i-toggle-source-mapping-in-safari-7
* https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/ResourcesandtheDOM/ResourcesandtheDOM.html#//apple_ref/doc/uid/TP40007874-CH3-SW4 
* https://stackoverflow.com/questions/42590031/loading-sourcemaps-and-debugging-in-safari/44644704#44644704
* https://docs.microsoft.com/en-us/microsoft-edge/f12-devtools-guide/debugger

## Editorial
Personally, I like the opportunity to see both versions of the code, sometimes, so I like Chrome's approach, but find it endlessly aggrivating that they present both the compiled and original versions as peers. Safari's approach, if applied to the debugger tab, might be the ideal approach. As often, I find that Apple has great ideas, and but doesn't do as good a job on the interaction design of their tools. Chrome gets the key details solved, but leaves a sloppy-feeling experience.  I should probalby use Firefox and Edge more than I do.