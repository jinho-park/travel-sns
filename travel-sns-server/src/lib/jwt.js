const jwt = require('jsonwebtoken');
const {
    JWT_HASH: secret
} = process.env;

function encodeToken(payload, data){
    new Promise(
        (resolve, reject)=>{
            jwt.sign(payload, secret, {
                issuer: "travel-sns",
                expiresIn: "7d",
                data
            },(error, token) => {
                if(error) reject(error);
                resole(token);
            });
        }
    );
}

function decodeToken(token){
    new Promise(
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