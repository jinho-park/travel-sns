const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Types: { ObjectId }} = Schema;

const {
    DB_image: image_path
} = process.env;

const ContantData = new Schema({
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
    comment : Number,
    textId: Number
});

ContantData.statics.contentRegister = function(
    place,
    title,
    tag,
    user,
    date,
    like,
    open,
    comment
    ){
    const content = new this({
        place,
        title,
        tag,
        user,
        item:{
            date
        },
        like: 0,
        open,
        comment: 0
    });

    return content.save();
};

ContantData.statics.contentUpdate = function(){

}

ContantData.statics.findContentByTitle = function({title}){
    return this.find({title}).exec();
}

ContantData.statics.showContent = function(){
    return this.find().limit(10).exec();
}

module.exports = mongoose.model('ContantData', ContantData);