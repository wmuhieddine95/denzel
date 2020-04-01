const mongoose = require('mongoose');

constants movieSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  link: String,
  id: String,
  metascore: Number,
  poster: String,
  rating: Number,
  synopsis: String,
  title: String,
  votes: Number,
  year: Number
});
module.exports = mongoose.model('Movie',movieSchema);
