function User(reference, name) {
  this.reference = reference;
  this.name = name;
}

User.prototype = {
  reference: '',

  name: ''
};

module.exports = User;
