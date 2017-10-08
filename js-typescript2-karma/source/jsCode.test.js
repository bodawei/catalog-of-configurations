import { jsGreeter } from './jsCode.js';

describe('jsCode.jsGreeter', function() {

      it('does something wonderful', function() {
         expect(jsGreeter({ firstName: 'java', lastName: 'script' })).toEqual('Hello, java script');
      });

   });
