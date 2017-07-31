import chai from 'chai';

import greeeter from './example';

const expect = chai.expect;

describe('testing', () => {
   it('simple case', function() {
      const user = {
         firstName: "Jane",
         lastName: "User"
      };

      expect(greeeter(user)).to.equal("Hello, Jane User");
   });
});
