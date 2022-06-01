import { gql, useQuery } from '@apollo/client';

interface UserQueryVars {
  userId: number;
}

interface UserQueryData {
  userById: {
    id: number;
    nickname: string;
    email: string;
    isAdmin: boolean;
  }
}

const USER_QUERY = gql`
  query userById($userId: Int!) {
    userById(userId: $userId) {
      id
      nickname
      email
      isAdmin
    }
  }
`

const useUser = (userId: number) => {
  const state = useQuery<UserQueryData, UserQueryVars>(USER_QUERY);
  const user = state.data?.userById;
  return [user, state] as [typeof user, typeof state];
};

export default useUser;