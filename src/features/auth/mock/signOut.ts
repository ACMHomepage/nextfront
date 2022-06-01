import { graphql } from 'msw';

import { getUserByEmail } from './commons/data';

const signOut = graphql.mutation(
  'signOut',
  (req, res, ctx) => {
    const jwt = req.cookies.jwt;
    const user = getUserByEmail(jwt);

    const result = res(
      ctx.cookie('jwt', ''),
      ctx.data({
        signOut: user,
      }),
    );

    console.log('[Mock] return', result);
    return result
  },
);

export default signOut;