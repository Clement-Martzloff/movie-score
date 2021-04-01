import useCase from './upvote-movie.usecase';

async function execute(
  source: any,
  args: { [argName: string]: any },
  context: any
): Promise<{} | void> {
  const { input } = args;
  const { user } = context;

  return useCase.executeImpl({ title: input.title, user });
}

export default execute;
