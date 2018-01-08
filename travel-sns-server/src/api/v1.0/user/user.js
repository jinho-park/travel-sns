const User = require('db/models/User');

exports.localRegister = (req, res)=>{
    const { email, password, nickname } = req.body;
    console.log(email);
    User.localRegister(email, password, nickname)
        .then(function(result){
            res.send('success');
        },function(err){
            res.send('error');
        });
}