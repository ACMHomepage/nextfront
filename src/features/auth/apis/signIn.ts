import { useCallback } from 'react';
import { gql, useMutation } from '@apollo/client';

import type { User } from './type';

interface SignInVars {
  signIn: {
    email: string;
    password: string;
  }
}

interface SignInData {
  signIn: Omit<User, "password">
};

const SIGN_IN_MUTATION = gql`
  mutation signIn($signIn: SignInInput!) {
    signIn(signIn: $signIn) {
      id
      nickname
      email
      isAdmin
    }
  }
`;

const useSignIn = () => {
  const [signInBase, state] = useMutation<
    SignInData,
    SignInVars
  >(SIGN_IN_MUTATION);
  
  const signIn = useCallback(
    async(email: string, password: string) =>  {
      try {
        await signInBase({ variables: { signIn: { email, password } } });
      } catch (_error) {
        /* Do nothing. */
      }
    },
    [signInBase],
  )
  return [signIn, state] as [typeof signIn, typeof state];
}

export { useSignIn };

export type { SignInVars, SignInData };