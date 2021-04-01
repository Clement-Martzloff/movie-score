import { UseCase } from '../../../base/usecase.base';
import { User } from '../../user/user.domain';
import { Movie } from '../movie.domain';
import { UserRepository } from '../../user/user.repository';

interface AddToUserDTO {
  movie: Movie;
  user: User;
}

const addToUser: UseCase<AddToUserDTO, void> = {
  async executeImpl({ user, movie }) {
    user.movies.add(movie);
    await UserRepository.save(user);
  }
};

export default addToUser;
