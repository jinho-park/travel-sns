require('dotenv').config();

const express= require('express');
const bodyparser = require('body-parser');

const app = new express();

const {
    PORT : port
} = process.env;

app.use(bodyparser());

app.listen(port, ()=>{
    console.log('server start');
});