const express = require('express');
const router = express.Router();
const user = require('./user');

router.post('/auth/user', user.localRegister);
router.post('/auth/local', user.localLogin);
router.post('/auth/social', user.socialRegister);
router.post('/auth/info', user.getUserInfo);

module.exports = router;