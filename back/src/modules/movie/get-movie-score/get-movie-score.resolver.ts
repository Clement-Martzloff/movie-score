import { MovieScore } from '../movie-score.domain';
import useCase from './get-movie-score.usecase';

async function execute(
  source: any,
  args: { [argName: string]: any },
  context: any
): Promise<Number | void> {
  const { title } = source;
  const movieScore = await useCase.executeImpl({ title });

  return movieScore.score;
}

export default execute;
