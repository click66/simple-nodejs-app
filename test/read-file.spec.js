const assert = require('chai').assert;
const readFile = require('../src/read-file');

describe('readFile', function () {
  const filePath = __dirname + '/_data/file.txt';

  it('reads the file', function () {
    assert.equal(readFile(filePath), 'Lorem ipsum dolor sit amet');
  });
});
