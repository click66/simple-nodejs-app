const parseCsv = require('../../src/parse-csv');
const readFile = require('../../src/read-file');
const userMiddleware = require('../../src/user-middleware');
const userRepository = require('../../src/user-repository');

module.exports = userRepository(
  parseCsv.bind(null, readFile.bind(null, __dirname + '/../../resources/users.csv'), true),
  userMiddleware.createModel
);
