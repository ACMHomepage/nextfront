import { graphql } from 'msw';

import { SignInVars, SignInData } from '../apis/signIn';

import { getUserByEmail } from './data';

const signIn = graphql.mutation<SignInData, SignInVars>(
  'signIn',
  (req, res, ctx) => {
    const { signIn } = req.variables;

    const user = getUserByEmail(signIn.email);

    if (user.password !== signIn.password) {
      const error = { message: 'The password is not right' };
      return res(ctx.errors([error]));
    }

    const result = res(
      ctx.cookie('jwt', `${user.email}`),
      ctx.data({
        signIn: user,
      })
    )

    console.log('[Mock] Get', signIn, 'return', result);
    return result;
  }
)

export default signIn;