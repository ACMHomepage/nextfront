import useAuthState from "./useAuthState";

const useSelf = () => {
  const authState = useAuthState();
  if (authState.withInfo) {
    return authState.data;
  } else {
    return undefined;
  }
}

export default useSelf;