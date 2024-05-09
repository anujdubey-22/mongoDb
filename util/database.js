const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

mongoConnect = callback => {
  MongoClient.connect('mongodb+srv://user:user@cluster0.6ks9cpl.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0')
  .then(client => {
    console.log('connected');
    _db = client.db();;
    callback();
  })
  .catch(error => {
    console.log(error);
    throw error;
  })
};

const getDb = () =>{
  if (_db){
    return _db;
  }
  throw 'no databse found'
};


exports.mongoConnect= mongoConnect;
exports.getDb = getDb;