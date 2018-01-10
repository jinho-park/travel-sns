require('dotenv').config();

const express= require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = new express();
const api = require('./api');
const db = require('./db');

const {
    PORT : port
} = process.env;

db.connect();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', api);

app.use('/', express.static(__dirname+'/../../travel-sns-webclient/build'));
app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname, '../../travel-sns-webclient/build', 'index.html'))
});

app.listen(port, ()=>{
    console.log('server start' + port);
});