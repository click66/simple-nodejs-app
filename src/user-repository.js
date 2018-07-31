function userRepository(getData, createModel) {
  return function () {
    return getData().map(createModel);
  }
}

module.exports = userRepository;
