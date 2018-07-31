const assert = require('chai').assert
  , expect = require('chai').expect;

const userMiddleware = require('../src/user-middleware')
  , User = require('../src/user');

describe('user-middleware', function () {
  const reference = '123456'
    , name = 'John Wilkes Booth';

  describe('user-middleware.createEntity', function () {
    it('creates an entity', function () {
      const user = new User(reference, name);
      const result = userMiddleware.createEntity(user);

      expect(result.reference).to.equal(reference);
      expect(result.name).to.equal(name);
    });
  });

  describe('user-middleware.createModel', function () {
    it('creates a model', function () {
      const result = userMiddleware.createModel({
        'reference': reference,
        'name': name,
      });

      assert.instanceOf(result, User);
      expect(result.reference).to.equal(reference);
      expect(result.name).to.equal(name);
    });

    it('throws ReferenceError if reference not defined', function () {
      expect(function () {
        userMiddleware.createModel({'name': 'my-name'});
      }).to.throw(ReferenceError);
    });

    it('throws ReferenceError if name not defined', function () {
      expect(function () {
        userMiddleware.createModel({'reference': 'my-reference'});
      }).to.throw(ReferenceError);
    });
  });
});
