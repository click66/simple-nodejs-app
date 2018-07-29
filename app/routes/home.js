const router = require('express').Router();

const users = require('../services/users');

router.get('/', function(req, res) {
  res.send(users());
});

module.exports = router;
