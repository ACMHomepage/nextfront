import { useCallback, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

import { useDispatch } from 'src/store';

import { signIn as signInAction } from '../slice';

import { useAuthState } from './state';

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
  const authState = useAuthState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.data) {
      if (!authState.withInfo) {
        dispatch(signInAction(state.data.signIn));
      }
    }
  }, [state]);
  
  const signIn = useCallback(
    async(data: signInFnData, option?: signInFnOption) =>  {
      try {
        await signInBase({ variables: { signIn: data } });
        if (state.error === undefined && option?.url !== undefined) {
          router.push(option.url);
        }
      } catch (error) {
        /* Do nothing. */
        console.error(error);
      }
    },
    [signInBase],
  )
  return [signIn, state] as [typeof signIn, typeof state];
}

export { useSignIn };

export type { SignInVars, SignInData };