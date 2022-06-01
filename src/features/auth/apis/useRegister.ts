import { useCallback, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

import { useDispatch } from 'src/store';

import useAuthState from './useAuthState';
import { signIn } from '../slice';

interface RegisterVars {
  user: {
    email: string;
    nickname: string;
    password: string;
  }
}

interface RegisterData {
  register: {
    id: number;
    nickname: string;
    email: string;
    isAdmin: boolean;
  }
}

const REGISTER_MUTATION = gql`
  mutation register($user: UserInput!) {
    register(user: $user) {
      id
      nickname
      email
      isAdmin
    }
  }
`;

interface RegisterFnData {
  email: string;
  nickname: string;
  password: string;
}

interface RegisterFnOption {
  url?: string;
}

const useRegister = () => {
  const [registerBase, state] = useMutation<
    RegisterData,
    RegisterVars
  >(REGISTER_MUTATION);
  const router = useRouter();
  const authState = useAuthState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.data) {
      if (!authState.withInfo) {
        dispatch(signIn(state.data.register));
      }
    }
  }, [state]);

  const register = useCallback(
    async (data: RegisterFnData, option?: RegisterFnOption) => {
      try {
        await registerBase({
          variables: {
            user: data
          }
        });
        if (state.error === undefined && option?.url !== undefined) {
          router.push(option.url);
        }
      } catch (error) {
        /* Do nothing. */
        console.error(error);
      }
    },
    [registerBase],
  );
  return [register, state] as [typeof register, typeof state];
}

export default useRegister;

export type { RegisterVars, RegisterData };