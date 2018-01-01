const express = require('express');
const router = express.Router();
const v10 = require('./v1.0');

router.use('/v1.0', v10);
//model : 서버동작
//control : url에 따른 분할
module.exports = router;