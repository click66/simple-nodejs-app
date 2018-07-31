const parseCsv = require('../../src/parse-csv');
const User = require('../../src/user');

function toUser(row) {
  return new User(row.reference, row.name);
}

function toRow(user) {
  return {
    'reference': user.reference,
    'name': user.name,
  };
}

function users() {
  const data = parseCsv(__dirname + '/../../resources/users.csv', true);


}

module.exports = users;
