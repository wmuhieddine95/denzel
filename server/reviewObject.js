const mongoose = require('mongoose');
const movie = require('movieObject');
constants reviewSchema = mongoose.Schema({
  movie_id: { type: String, ref: movie.id},
  reviews: {type: String},
  datePosted: {type: String}
  });
module.exports = mongoose.model('Review',reviewSchema);
