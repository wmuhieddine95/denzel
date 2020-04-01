const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList
  } = require("graphql");

  const totalQL = new GraphQLObjectType({
    name: "counterMovie",
    fields: {
      total: { type: GraphQLInt }
    }
  });

  const reviewQL= new GraphQLObjectType({
    name: "review",
    fields: {
      date: { type: GraphQLString },
      review: { type: GraphQLString }
    }
  });

  const movieQL = new GraphQLObjectType({
    name: "movie",
    fields: {
      _id: { type: GraphQLID },
      reviews: { type: new GraphQLList(typeReview) },
      link: { type: GraphQLString },
      id: { type: GraphQLString },
      metascore: { type: GraphQLInt },
      poster: { type: GraphQLString },
      rating: { type: GraphQLFloat },
      synopsis: { type: GraphQLString },
      title: { type: GraphQLString },
      votes: { type: GraphQLFloat },
      year: { type: GraphQLInt }
    }
  });

  const searchMovieQL = new GraphQLObjectType({
    name: "searchMovie",
    fields: {
      limit: { type: GraphQLInt },
      metascore: { type: GraphQLInt },
      results: { type: new GraphQLList(typeMovie) }
    }
  });

  const movieIdQL = new GraphQLObjectType({
    name: "movieId",
    fields: {
      _id: { type: GraphQLID }
    }
  });

  module.exports = {
    totalQL,
    searchMovieQL,
    movieQL,
    movieIdQL
  };
