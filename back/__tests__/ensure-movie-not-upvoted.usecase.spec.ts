import { v4 } from 'uuid';
import { UserFactory } from '../src/modules/user/user.domain';
import { MovieFactory } from '../src/modules/movie/movie.domain';
import { MovieListFactory } from '../src/modules/movie/movie-list.domain';
import ensureMovieNotUpvoted from '../src/modules/movie/upvote-movie/ensure-movie-not-upvoted.usecase';
import UserValidationError from '../src/modules/user/user-validation-error';

describe('Ensure movie not upvoted', () => {
  it('should throw an error if movie already upvoted', () => {
    const movie = MovieFactory.create({
      userInfoId: v4(),
      title: 'batman',
      createdAt: new Date()
    });
    const user = UserFactory.create({
      email: 'john@doe.com',
      passwordHash: 'hash',
      createdAt: new Date(),
      movies: MovieListFactory.create([movie])
    });

    try {
      ensureMovieNotUpvoted.executeImpl({ title: 'batman', user });
    } catch (error) {
      expect(error.message).toBe('Movie already upvoted.');
      expect(error instanceof UserValidationError).toBe(true);
    }
    expect.assertions(2);
  });
});
