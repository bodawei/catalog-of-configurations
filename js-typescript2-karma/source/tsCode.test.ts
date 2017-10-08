import { tsGreeter } from './tsCode';

describe('jsCode.jsGreeter', () => {

   it('does something wonderful', () => {
      expect(tsGreeter({ firstName: 'one', lastName: 'two' })).toEqual('Hello, one two');
   });

});