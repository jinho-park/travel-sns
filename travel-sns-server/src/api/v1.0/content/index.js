const express = require('express');
const router = express.Router();
const content = require('./content');

router.post('/file/register', content.RegisterContent);
router.get('/file/get', content.getContent);

module.exports = router;