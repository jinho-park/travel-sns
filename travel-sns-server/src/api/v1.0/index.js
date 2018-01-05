const express = require('express');
const router = express.Router();
const content = require('./content');
const user = require('./user');

router.use('/content', content);
router.use('/user', user);
//model : 서버동작
//control : url에 따른 분할
module.exports = router;