import { gql, useMutation } from '@apollo/client';
import { useCallback } from 'react';

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

const useRegister = () => {
  const [registerBase, state] = useMutation<
    RegisterData,
    RegisterVars
  >(REGISTER_MUTATION);

  const register = useCallback(
    async (email: string, nickname: string, password: string) => {
      try {
        await registerBase({
          variables: {
            user: { email, nickname, password }
          }
        });
      } catch (_error) {
        /* Do nothing. */
      }
    },
    [registerBase],
  );
  return [register, state] as [typeof register, typeof state];
}

export { useRegister };

export type { RegisterVars, RegisterData };