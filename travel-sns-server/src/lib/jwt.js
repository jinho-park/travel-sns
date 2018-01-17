const jwt = require('jsonwebtoken');
const {
    JWT_HASH: secret
} = process.env;

function encodeToken(payload, subject){
    return new Promise(
        (resolve, reject)=>{
            jwt.sign(payload, secret, {
                issuer: 'travel-sns',
                expiresIn: '7d',
                subject
            },(error, token) => {
                if(error) reject(error);
                resolve(token);
            });
        }
    );
}

function decodeToken(token){
    return new Promise(
        (resolve, reject)=>{
            jwt.verify(token, secret, (error, decode) => {
                if(error) reject(error);
                resolve(decode);
            })
        }
    )
}

exports.encodeToken = encodeToken;
exports.decodeToken = decodeToken;