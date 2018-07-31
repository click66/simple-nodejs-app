//var getusers = require('../src/getusers');

xdescribe('getusers', function () {
  const userData = "reference,name\nms,Mike Sobieszek\ngg,George Gaynor\ncs,Clark Sirl";

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
