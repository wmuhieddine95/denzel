const mongoose= require('mongoose');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const {IMDB_NAME_URL,
  IMDB_TITLE_URL,
  IMDB_URL,
  P_LIMIT,
  SEARCH_LIMIT,
  METASCORE,
  PORT,
  CLUSTER_DB,
  COLLECTION,
  USERNAME,
  PASSWORD,
  URI} = require('./constants');
const Movie = require('./movieObject');
const Review = require('./reviewObject');
const AwesomeMovie = require('./awesomeObject');
const app = express();
module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());

app.get('/', (request, response) => {

  response.send({'ack': true});
});

//1) Number of Movies
app.get('/movies', (request, response) => {
  admin.save(function (err, docs) {
    if (err) {
        console.log('Error');
    } else {
        userModel.countDocuments({name: 'anand'}, function(err, c) {
            console.log('Count is ' + c);
       });
    }
  });
/*  var cursor = col_movies.find({}).toArray(function(err, results){
      response.send(results);
});
var cursor = col_movies.find({}).toArray(function(err, results){
  cursor.count(function(err, count){
    response.send("Total movies: "+count);
  });
});*/
});

//2) Random Awesome Movie
app.get('/awesome_random', (request, response) => {
  N = col_awesome.count();
  R = Math.floor(Math.random() * N)
  response.send(col_awesome.find({}).limit(1).skip(R));
    });

//3) All Movies name
app.get('/listname', (request, response) => {
  all_films = col_awesome.find({"title":1, "_id":0});
  response.send(all_films);
    });

//4) RETURN Movie
app.get('/movies/:id', (request, response) => {
  try {
    movie = request.params.id;
    display_movie = col_movies.find({"id":movie, "_id":0});
    response.send(display_movie);
  } catch (e) {
    console.log(e);
    return response.status(500).send(error);
  }
    });

//5) Movies Search
app.get('/movies/search', (request, response) => {
  try {
    let qlimit = request.query.limit || LIMIT_SEARCH;
    let qmetascore = request.query.metascore;
    res_search = col_movies.find({"metascore": { $gt: {qmetascore} } }).limit(qlimit);
    disp_search= res_search.toArray(err, )
    response.send(display_movie);
  } catch (e) {
    console.log(e);
    return response.status(500).send(error);
  }
    });

//6) Set a REVIEW: revised:1
app.post("/movies/:id", (request, response) => {
  try {
    let p_review= request.query.review || null;
    let pnow = new Date();
    let movieId=request.params.id.toString();
    let pDate= pnow.toDateString();
    let toPostReview= new Review({
      movie_id: movieId,
      review:p_review,
      datePosted:pDate
    });
    toPostReview.save()
   .then(doc => {
     console.log(doc);
     col_review.insertOne(toPostReview, (error, res) => {
     response.send(res.ops);
   });
   })
   .catch(err => {
     console.error(err)
   });
    //{movieId,p_review,pdate.toDateString()};
}
catch (error) {
console.log(error);
return response.status(500).send(error);
}
});

//http://localhost:9292/movies/populate/nm0000243);
app.listen(PORT);
console.log(`📡 Running on port ${PORT}`);
 var db = mongoose.connect('mongodb+srv://'+USERNAME+':'+PASSWORD+
 'm0ng0db@myrestapimovies-3abgr.mongodb.net/test?retryWrites=true&w=majority',
 {
  useMongoClient:true
  }).catch(err => console.log(err.reason));
//col_movies = db("movies").collection("imdb");
//col_awesome = CLIENTDB.db("movies").collection("awesome");
//col_reviews = CLIENTDB.db("movies").collection("reviews");
console.log("Connected Successfully");
 //var userSchema = new mongoose.Schema({name:String,password:String});
 //var userModel =db.model('userlists',userSchema);
 //var admin = new userModel({ name: 'admin', password: 'm0ng0db'});
/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:m0ng0db@myrestapimovies-3abgr.mongodb.net/test?retryWrites=true&w=majority";
const CLIENTDB = new MongoClient(uri, { useNewUrlParser: true });
CLIENTDB.connect(err => {
    col_movies = CLIENTDB.db("movies").collection("imdb");
    col_awesome = CLIENTDB.db("movies").collection("awesome");
    col_reviews = CLIENTDB.db("movies").collection("reviews");
    console.log("Connected Successfully");
});*/
