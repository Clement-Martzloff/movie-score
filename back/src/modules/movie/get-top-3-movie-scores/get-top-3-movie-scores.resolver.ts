import { MovieScore } from '../movie-score.domain';
import useCase from './get-top-3-movie-scores.usecase';

async function execute(
  source: any,
  args: { [argName: string]: any },
  context: any
): Promise<MovieScore[] | void> {
  try {
    return useCase.executeImpl(undefined);
  } catch (error) {
    /**
     * Pass the error to the express error handling stack.
     */
    context.next(error);
  }
}

export default execute;
