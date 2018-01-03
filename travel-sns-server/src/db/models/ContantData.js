const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Types : {} }= Schema;

const ContantData = new Schema({
    image: String,
    country: String,
    city: String,
    title: String,
    tag: String,
    user: String,
    date : Date,
    like : Number,
    open : Boolean
})

module.exports = mongoose.model('ContantData', ContantData);