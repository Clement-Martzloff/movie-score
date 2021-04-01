import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} from 'graphql';
import {
  connectionDefinitions,
  connectionArgs,
  nodeDefinitions,
  fromGlobalId,
  globalIdField
} from 'graphql-relay';

import getUser from '../../modules/user/get-user/get-user.resolver';
import getUserUseCase from '../../modules/user/get-user/get-user.usecase';
import getMovieScore from '../../modules/movie/get-movie-score/get-movie-score.resolver';
import upvoteMovie from '../../modules/movie/upvote-movie/upvote-movie.resolver';
import searchOmdbMovies from '../../modules/movie/search-omdb-movies/search-omdb-movies.resolver';
import getOmdbMovieUseCase from '../../modules/movie/get-omdb-movie/get-omdb-movie.usecase';

/**
 * We get the node interface and field from the relay library.
 *
 * The first method is the way we resolve an ID to its object. The second is the
 * way we resolve an object that implements node to its type.
 */
const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);

    switch (type) {
      case 'User':
        return getUserUseCase.executeImpl({ id });
      case 'OmdbMovie':
        return getOmdbMovieUseCase.executeImpl({ imdbId: id });
      default:
        return null;
    }
  },
  (obj): GraphQLObjectType<any, any> | null => {
    if (obj.email) {
      return UserType;
    }
    if (obj.imdbId) {
      return OmdbMovieType;
    }

    return null;
  }
);

const OmdbMovieType = new GraphQLObjectType({
  name: 'OmdbMovie',
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField('OmdbMovie', ({ imdbId }) => imdbId),
    title: { type: GraphQLString },
    year: { type: GraphQLString },
    imdbId: { type: GraphQLString },
    type: { type: GraphQLString },
    posterUrl: { type: GraphQLString },
    votes: { type: GraphQLInt, resolve: getMovieScore }
  })
});

const { connectionType: OmdbMovieTypeConnection } = connectionDefinitions({
  nodeType: OmdbMovieType
});

const UserType = new GraphQLObjectType({
  name: 'User',
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField('User', ({ id }) => id),
    email: { type: GraphQLNonNull(GraphQLString) },
    searchOmdbMovies: {
      type: OmdbMovieTypeConnection,
      args: {
        term: { type: GraphQLString },
        ...connectionArgs
      },
      resolve: searchOmdbMovies
    }
  })
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root query.',
  fields: () => ({
    node: nodeField,
    me: {
      type: UserType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve: getUser
    }
  })
});

const UpvoteMovieInputType = new GraphQLInputObjectType({
  name: 'UpvoteMovieInput',
  fields: () => ({
    title: { type: GraphQLNonNull(GraphQLString) }
  })
});

const UpvoteMovieResponseType = new GraphQLObjectType({
  name: 'UpvoteMovieResponse',
  fields: () => ({
    title: { type: GraphQLString }
  })
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The root mutation.',
  fields: () => ({
    upvoteMovie: {
      type: UpvoteMovieResponseType,
      args: { input: { type: UpvoteMovieInputType } },
      resolve: upvoteMovie
    }
  })
});

const RecoveryAssistantSchema: GraphQLSchema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
  types: [UserType]
});

export default RecoveryAssistantSchema;
