const mongoose = require('mongoose');
const jwt = require('lib/jwt');
const { Schema } = mongoose;

const User = new Schema({
    email: String,
    password: String,
    social: {
        facebook: {
            id: String,
            accessToken: String
        }
    },
    nickname : String
})

User.statics.findByEmail = function(email){
    return this.findOne({email}).exec();
}

User.statics.findByNickname = function(nickname){
    return this.findOne({nickname}).exec();
}

User.statics.findExistUser = function(email, nickname){
    return this.findOne({email, nickname}).exec();
}

User.statics.localRegister = function(email, password, nickname){
    
    const user = new this({
        email,
        password,
        nickname
    });

    return user.save();
};

module.exports = mongoose.model('User', User);