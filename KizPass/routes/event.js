const express = require('express');
const router = express.Router();

const eventController = require('../controller/event');

router.post('/', eventController.event_create);

router.get('/progress', eventController.evnet_progressList);

router.get('/finish', eventController.event_finishList);


module.exports = router;
