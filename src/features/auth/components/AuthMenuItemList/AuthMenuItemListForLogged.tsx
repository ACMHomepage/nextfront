import Menu from "src/commons/components/Menu";

import useSignOut from "src/features/auth/apis/useSignOut";

const AuthMenuItemListForLogged = () => {
  const [signOut, _state] = useSignOut();

  return (
    <Menu.Item onClick={signOut}>Sign out</Menu.Item>
  );
};

export default AuthMenuItemListForLogged;