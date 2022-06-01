import useSelf from 'src/features/auth/apis/useSelf';

import AuthMenuItemListForLogged from './AuthMenuItemListForLogged';
import AuthMenuItemListForUnlogged from './AuthMenuItemListForUnlogged';

const AuthMenuItemList = () => {
  const self = useSelf();

  if (self === undefined) {
    return <AuthMenuItemListForUnlogged />;
  } else {
    return <AuthMenuItemListForLogged />;
  }
};

export default AuthMenuItemList;