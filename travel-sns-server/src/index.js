require('dotenv').config();

const express= require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = new express();
const api = require('./api');

const {
    PORT : port
} = process.env;

app.use(bodyparser.json());

app.use('/api', api);

app.use('/', express.static(__dirname+'/../../travel-sns-webclient/build'));
app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname, '../../travel-sns-webclient/build', 'index.html'))
  })

app.listen(port, ()=>{
    console.log('server start' + port);
});