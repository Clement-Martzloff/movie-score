import { User } from '../../user/user.domain';

async function execute(
  source: any,
  args: { [argName: string]: any },
  context: any
): Promise<User> {
  const { user } = context;

  return user;
}

export default execute;
