var express = require('express');
var router = express.Router();

const userController = require('../controller/user');
const checkAuth = require('../middleware/check-auth');

router.post('/signup', userController.user_signup);

router.post('/login', userController.user_login);

router.get('/info', checkAuth, userController.user_info);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
