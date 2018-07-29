var getusers = require('../src/getusers');

describe('getusers', function () {
  it('gets users', function () {
    const sut = getusers(() => {
        return [
        ];
      }
    );

    const results = sut();
    expect(results).to.be.a('array');
    expect(results).to.have.lengthOf(3);
  });
});
