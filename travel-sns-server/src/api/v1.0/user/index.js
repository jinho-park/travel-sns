const express = require('express');
const router = express.Router();
const user = require('./user');

router.post('/auth/user', user.localRegister);

module.exports = router;