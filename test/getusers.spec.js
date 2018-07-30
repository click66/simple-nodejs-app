//var getusers = require('../src/getusers');

xdescribe('getusers', function () {
  xit('gets users', function () {
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
