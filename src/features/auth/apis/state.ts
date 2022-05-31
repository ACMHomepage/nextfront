import { RootState } from "src/store";
import { useSelector } from "src/store/hooks";

const useAuthState = () => {
  const selectAuthState = (state: RootState) => state.auth;
  const authState = useSelector(selectAuthState);
  return authState;
}

export { useAuthState };