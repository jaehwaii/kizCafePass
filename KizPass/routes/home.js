const express = require('express');
const router = express.Router();

const homeController = require('../controller/home');

router.post('/', homeController.home_create);

router.get('/new', homeController.home_newList);
router.get('/hot', homeController.home_hotList);
router.get('/recommand', homeController.home_recommandList);

module.exports = router;