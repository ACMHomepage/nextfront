import { gql, useMutation } from "@apollo/client";
import { useCallback, useEffect } from "react";
import { useDispatch } from "src/store";
import { signOut as signOutAction } from "../slice";

import useAuthState from "./useAuthState";

const SIGNOUT_MUTATION = gql`
  mutation signOut {
    signOut
  }
`;

const useSignOut = () => {
  const [signOutBase, state] = useMutation(SIGNOUT_MUTATION);
  const authState = useAuthState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.data) {
      if (authState.logged) {
        dispatch(signOutAction());
      }
    }
  });

  const signOut = useCallback(
   async () => {
    try {
      await signOutBase();
    } catch (error) {
      /* Do nothing */
      console.error(error);
    }
   },
   [signOutBase],
  );

  return [signOut, state] as [typeof signOut, typeof state];
}

export default useSignOut;