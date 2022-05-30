import { graphql } from 'msw';

import { RegisterVars, RegisterData } from '../apis/register';

import { addUser } from './data';

const register = graphql.mutation<RegisterData, RegisterVars>(
  'register',
  (req, res, ctx) => {
    const { user: userBase } = req.variables;

    const user = addUser(userBase)!;

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