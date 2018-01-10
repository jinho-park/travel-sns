const User = require('db/models/User');
const validate = require('validate.js');
const jwt = require('lib/jwt');
const crypto = require('crypto');

const {
    CRY_HASH : secret
} = process.env;

exports.localRegister = (req, res)=>{
    const { email, password, nickname } = req.body;
    const constraints = {
        email : {
            email : {
                message : "잘못된 이메일 형식입니다"
            }
        },
        password : {
            format : {
                pattern : "[a-zA-Z0-9]+",
                message : "잘못된 문자가 들어가 있습니다"
            },
            length : {
                minimum : 6,
                maximum : 20,
                message : "최소 6, 최대 20자 가능합니다"
            }
        },
        nickname : {
            format : {
                pattern : "[a-zA-Z0-9ㄱ-힣]+",
                message : "잘못된 형식입니다"
            },
            length : {
                minimum : 2,
                maximum : 10,
                message : "최소 2, 최대 10자 가능합니다"
            }
        }
    };

    const error = validate({email, password, nickname}, constraints);

    if(error){
        res.send(error);
    }

    const hashpassword = crypto.createHmac('sha256', secret).update(password).digest('hex');

    User.findByEmail(email)
        .then(function(result){
            if(result){
                const error = {
                    dupliEmail : "중복된 이메일이 있습니다"
                };
                res.send(error);
            }

            return User.findByNickname(nickname);
        }, function(err){
            res.status(400).send('request error');
        })
        .then(function(result){
            if(result){
                const error = {
                    dupliNick : "중복된 닉네임이 있습니다"
                };
                res.send(error);
            }

            return User.localRegister(email, hashpassword, nickname);
        }, function(err){
            res.status(400).send('request error');
        })
        .then(function(result){
            res.send('Success Register');
        }, function(err){
            res.status(400).send('request error');
        })
        .catch(function(err){
            res.status(409).send('error request');
        });
}