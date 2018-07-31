const userRepositorySpec = require('../src/user-repository');
const assert = require('chai').assert;
const expect = require('chai').expect;

const User = require('../src/user');

describe('user-repository', function () {
  const userData = "reference,name\nms,Mike Sobieszek\ngg,George Gaynor\ncs,Clark Sirl";

  it('gets users', function () {
    const userEntity = {
      'reference': '123',
      'name': 'Simon Fifield',
    };

    const userModel = new User('123', 'Simon Fifield');

    const users = userRepositorySpec(() => [userEntity], () => userModel)();

    assert.isArray(users);
    expect(users).include(userModel);
  });
});
