import { graphql } from 'msw';

import { RegisterVars, RegisterData } from 'src/features/auth/apis/useRegister';

import { addUser } from './commons/data';

const register = graphql.mutation<RegisterData, RegisterVars>(
  'register',
  (req, res, ctx) => {
    const { user: userBase } = req.variables;

    const userResult = addUser(userBase)!;
    if (userResult.isErr()) {
      return res(ctx.errors([{ message: userResult.error }]));
    }
    const user = userResult.value;

    const result = res(
      ctx.cookie('jwt', user.email),
      ctx.data({
        register: user,
      }),
    );

    console.log('[Mock] Get', userBase, 'return', result);
    return result;
  }
);

export default register;