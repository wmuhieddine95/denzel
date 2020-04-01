const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:m0ng0db@myrestapimovies-3abgr.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);
//exports = {CLIENTDB};
const movies=require('./movies');
const awesome=require('./awesome');
client.connect(uri, { useNewUrlParser: true }, (error, client) => {
  const collection = client.db("movies").collection("imdb");
  const collection2 = client.db("movies").collection("awesome");
  // perform actions on the collection object
  console.log("Working connection to db");
  var fs = require('fs');
  try{
    collection.insertMany(movies);
    collection2.insertMany(awesome);
    }catch(e){
  console.log(e);}
  client.close();
});
