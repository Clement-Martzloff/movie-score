import { UseCase } from '../../../base/usecase.base';
import { UserRepository } from '../../user/user.repository';
import { MovieFactory } from '../movie.domain';

import ensureMaxNotReached from '../ensure-max-movie-not-reached.usecase';
import addToUser from './add-movie-to-user.usecase';
import initScoreToOne from './init-movie-score-to-one.usecase';

import UserValidationError from '../../user/user-validation-error';

interface RegisterMovieDTO {
  userInfoId: string;
  title: string;
}

const registerMovie: UseCase<RegisterMovieDTO, void> = {
  async executeImpl(DTO) {
    const me = await UserRepository.find(DTO.userInfoId);
    const movie = MovieFactory.create({ userInfoId: me!.id, title: DTO.title });
    const context = { user: me!, movie: movie };

    ensureMaxNotReached.executeImpl(context);
    await addToUser.executeImpl(context);
    await initScoreToOne.executeImpl(context);
  }
};

export default registerMovie;
