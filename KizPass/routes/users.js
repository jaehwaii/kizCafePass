var express = require('express');
var router = express.Router();

const userController = require('../controller/user');

router.post('/signup', userController.user_signup);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
