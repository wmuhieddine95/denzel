const { GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql');
const {  ResolveTotal,
  ResolveRandomMovie,
  Resolvemovie,
  ResolveSearchMovie,
  ResolvePostRev
} = require("./resolver");
const {
  totalQL,
  searchMovieQL,
  movieQL,
  movieIdQL
} = require("./typeDefs");

const queries = new GraphQLObjectType({
  name: "Query",
  fields: {
    populate: {
      type: typePopulate,
      args: {
        id: { type: GraphQLString }
      },
      resolve: Rpopulate
    },
    randomMovie: {
      type: typeMovie,
      resolve: RrandomMovie
    },
    movie: {
      type: typeMovie,
      args: {
        id: { type: GraphQLString }
      },
      resolve: Rmovie
    },
    searchMovie: {
      type: typeSearchMovie,
      args: {
        limit: { type: GraphQLInt, defaultValue: 5 },
        metascore: { type: GraphQLInt, defaultValue: 0 }
      },
      resolve: RsearchMovie
    },
    postReview: {
      type: typeMovieId,
      args: {
        id: { type: GraphQLString },
        date: { type: GraphQLString, defaultValue: null },
        review: { type: GraphQLString, defaultValue: null }
      },
      resolve: RpostReview
    }
  }
});

exports.queries = queries;
