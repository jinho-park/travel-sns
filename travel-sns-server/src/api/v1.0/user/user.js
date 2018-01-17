const User = require('db/models/User');
const validate = require('validate.js');
const jwt = require('lib/jwt');
const crypto = require('crypto');

const {
    CRY_HASH : secret
} = process.env;

function Hash(password){
    return crypto.createHmac('sha256', secret).update(password).digest('hex');
}

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

    const hashpassword = Hash(password);

    User.findByEmail(email)
        .then(function(result){
            if(result){
                const error = {
                    email : "중복된 이메일이 있습니다"
                };
                throw error;
            }else{
                return User.findByNickname(nickname);
            }
        })
        .then(function(result){
            if(result){
                const error = {
                    nickname : "중복된 닉네임이 있습니다"
                };
                throw error;
            }
            else return User.localRegister(email, hashpassword, nickname);
        })
        .then(function(result){
            res.send('Success Register');
        })
        .catch(function(err){
            res.send(err);
        });
}

exports.socialRegister = (req, res)=>{
    res.send('아직 안만들어짐');
}

exports.localLogin = (req, res) => {
    const { email, password } = req.body;
    const hashpassword = Hash(password);

    var name;
    console.log('local login');
    User.localLogin(email, hashpassword)
        .then(function(result){
            if(result){
                const { nickname, email } = result;
                name = nickname;
                return jwt.encodeToken({
                    user: {
                        email,
                        nickname
                    }
                }, 'user');
            }else{
                const error = {
                    error : "아이디 패스워드를 확인해 주세요"
                };
                throw error;
            }
        }, function(err){
            res.status(500).send('login request error');
        })
        .then(function(accessToken){
            const token = {
                accessToken,
                name
            };
            res.send(token);
        }, function(err){
            res.send(err);
        })
        .catch(function(err){
            console.log(err);
            res.send('get error');
        });
}

exports.getUserInfo = (req, res) => {
    const { accessCode } = req.body;

    jwt.decodeToken(accessCode)
        .then(function(result){
            console.log(result);
        });

    res.send('implement....');
}