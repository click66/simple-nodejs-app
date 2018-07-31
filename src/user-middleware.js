const User = require('./user');

module.exports.createModel = function (entity) {
  ['reference', 'name'].forEach((attribute) => {
    if (entity[attribute] === undefined) {
      throw new ReferenceError('Field "' + attribute + '" is missing.');
    }
  });

  return new User(
    entity.reference,
    entity.name
  );
};

module.exports.createEntity = function (model) {
  return {
    'reference': model.reference,
    'name': model.name,
  };
};
