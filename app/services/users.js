const fs = require('fs');
const parse = require('csv-parse');
const user = require('../../src/User');

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
  var input = fs.readFileSync(__dirname + '/../../resources/users.csv');

  console.log(input);
};

module.exports = users;
