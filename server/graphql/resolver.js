const imdb = require("../imdb");
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://admin:m0ng0db@myrestapimovies-3abgr.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

const ResolveTotal = async (_, args) => {
  const { id } = args;
  try {
    const results = await imdb(id);
    return { total: results.length };
  } catch (e) {
    console.log(e);
  }
};

const ResolveRandomMovie = async () => {
  try {
    client.connect(err => {
      const col_awesome = client.db("movies").collection("awesome");
      col_awesome.findOne({},function(err, result){
        if (err) throw err;

        return result;
      });

      client.close();
  });
  } catch (e) {
    console.log(e);
  }
};

const Resolvemovie = async (_, args) => {
  const  id  = args;
  try {
    client.connect(err => {
      const col_imdb = client.db("movies").collection("imdb");
      console.log("Id of the movie id "+id);
      col_imdb.find({id:id}).toArray(function(err, result){
        if (err) throw err;
        return result;
      });
	  client.close();
  });
  } catch (e) {
    console.log(e);
  }
};

const ResolveSearchMovie = async (_, args) => {
  try {
    var limit = parseInt(args.limit);
    var metascore = parseInt(args.metascore);
    client.connect(err => {
      const col_imdb = client.db("movies").collection("imdb");

      collection.find({metascore:{$gte:metascore}
      }).limit(limit_number).sort({ metascore: -1 }).toArray(function(err, result){
        if (err) throw err;
        return result;
      });

      client.close();
  });
  } catch (e) {
    console.log(e);
  }
};

const ResolvePostRev = async (_, args) => {
  const { id, date, review } = args;
  try {
    client.connect(err => {
      const col_imdb = client.db("movies").collection("imdb");

      col_imdb.findcollection.findOneAndUpdate( {id},
      { $push: { reviews: { date, review } } },function(err, result){
        if (err) throw err;
        var id = {'_id':result};
        return id;
      });
      client.close();
   });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  ResolveTotal,
  ResolveRandomMovie,
  Resolvemovie,
  ResolveSearchMovie,
  ResolvePostRev
};
