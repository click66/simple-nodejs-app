const router = require('express').Router();

const userdata = require('../services/userdata');

router.get('/', function(req, res) {
  res.send(userdata());
});

module.exports = router;
