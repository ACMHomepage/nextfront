import { useCallback } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

import type { User } from './type';

interface SignInVars {
  signIn: {
    email: string;
    password: string;
  }
}

interface SignInData {
  signIn: {
    id: number;
    nickname: string;
    email: string;
    isAdmin: boolean;
  }
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

interface signInFnData {
  email: string;
  password: string;
}

interface signInFnOption {
  url?: string;
}

const useSignIn = () => {
  const [signInBase, state] = useMutation<
    SignInData,
    SignInVars
  >(SIGN_IN_MUTATION);
  const router = useRouter();
  
  const signIn = useCallback(
    async(data: signInFnData, option?: signInFnOption) =>  {
      try {
        await signInBase({ variables: { signIn: data } });
        if (state.error === undefined && option?.url !== undefined) {
          router.push(option.url);
        }
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