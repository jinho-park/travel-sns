const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContantData = new Schema({
    imageFile: {
        main: String,
        files: [String]
    },
    place: {
        country: String,
        city: String
    },
    title: String,
    tag: String,
    user: String,
    item : {
        date: [Date],
        image: [[String]],
        main: String
    },
    like : Number,
    open : Boolean,
    textId: Number
});

ContantData.statics.contentRegister = function(){

};

ContantData.statics.contentUpdate = function(){

}

ContantData.statics.findContentByTitle = function(){

}

ContantData.statics.showContent = function(){

}

module.exports = mongoose.model('ContantData', ContantData);