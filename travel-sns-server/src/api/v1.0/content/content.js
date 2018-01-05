const ContentData = require('db/models/ContantData');

exports.getContent = (req, res) => {
    ContentData.showContent()
        .then(function(result){
            res.send(result);
        }, function(error){
            res.send('error');
        }
    );
}

exports.RegisterContent = (req, res) => {
    const { place, title, tag, user, date, open} = req.body;
    ContentData.contentRegister(place, title, tag, user, date, open)
        .then(function(result){
            res.send(result);
        },function(err){
            res.send('error');
        }
    );
}