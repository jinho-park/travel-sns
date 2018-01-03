const mongoose = require('mongoose');
//mongod --dbpath d:\Db

const {
    DB_URL : mongoURL
} = process.env;

module.exports = (function () {
    mongoose.Promise = global.Promise;
  
    return {
      connect () {
        return mongoose.connect(mongoURL, {
          useMongoClient: true
        }).then(
          () => {
            console.log('db success connect');
          }
        ).catch(e => {
          console.error(e);
        });
      },
      disconnect () {
        return mongoose.disconnect();
      }
    };
  })();