const assert = require('chai').assert;
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
});
