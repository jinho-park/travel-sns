const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('helo');
})
//model : 서버동작
//control : url에 따른 분할
module.exports = router;