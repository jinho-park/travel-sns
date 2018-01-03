const mongoose = require('mongoose');
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
    return this.find(email);
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