var assert = require('chai').assert;
var User = require('../src/user');

describe('User', function () {
  it('can be constructed', function () {
    const sut = new User('reference', 'name');

    assert.instanceOf(sut, User);
  }); 
});

