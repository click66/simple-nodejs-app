const assert = require('chai').assert;
const expect = require('chai').expect;
const parseCsv = require('../src/parse-csv');

describe('parseCsv', function () {
  let contents;
  const getContents = function () {
    return contents;
  };

  it('returns array', function () {
    contents = "one,two\nfoo,bar\nmal,tam";

    assert.isArray(parseCsv(getContents, true));
  });

  it('returns array not containing header row if hasHeader is true', function () {
    contents = "one,two\nfoo,bar\nmal,tam";

    assert.lengthOf(parseCsv(getContents, true), 2);
  });

  it('returns array containing header row if hasHeader is false', function () {
    contents = "one,two\nfoo,bar\nmal,tam";

    assert.lengthOf(parseCsv(getContents, false), 3);
  });

  describe('can key object properties by name specified in header row', function () {
    let result;

    it('with single rows', function () {
      contents = "one,two\nfoo,bar";

      result = parseCsv(getContents, true);

      expect(result[0]).to.have.property('one', 'foo');
      expect(result[0]).to.have.property('two', 'bar');
    });

    it('with multiple rows', function () {
      contents = "one,two\nfoo,bar\nmal,tam";

      result = parseCsv(getContents, true);

      expect(result[0]).to.have.property('one', 'foo');
      expect(result[0]).to.have.property('two', 'bar');
      expect(result[1]).to.have.property('one', 'mal');
      expect(result[1]).to.have.property('two', 'tam');
    });
  });

  describe('can key object properties by number if hasHeader is false', function () {
    let result;

    it('with single rows', function () {
      contents = "one,two\nfoo,bar";

      result = parseCsv(getContents, false);

      expect(result[0]).to.have.property(0, 'one');
      expect(result[0]).to.have.property(1, 'two');
    });

    it('with multiple rows', function () {
      contents = "one,two\nfoo,bar\nmal,tam";

      result = parseCsv(getContents, false);

      expect(result[0]).to.have.property(0, 'one');
      expect(result[0]).to.have.property(1, 'two');
      expect(result[1]).to.have.property(0, 'foo');
      expect(result[1]).to.have.property(1, 'bar');
    });
  });

  it('copes with boundary characters', function () {
    let result;

    contents = 'abc!@#$%^&*(JESAFJSLFJLKDSA{}:"|<>?';

    result = parseCsv(getContents, false);

    assert.lengthOf(result, 1);
    expect(result[0]).to.have.property(0, contents);
  });
});
