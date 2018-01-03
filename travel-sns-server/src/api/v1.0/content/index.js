const express = require('express');
const router = express.Router();

router.get('/exist/file', (req, res)=>{
    res.send('hello');
});

module.exports = router;