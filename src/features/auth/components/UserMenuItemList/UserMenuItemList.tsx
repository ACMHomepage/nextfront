import Link from 'next/link';

import { url as registerUrl } from 'pages/register';
import { url as signInUrl } from 'pages/sign-in';

import Menu from 'src/commons/components/Menu';

import useSignOut from '../../apis/useSignOut';
import useSelf from '../../apis/useSelf';

const UserMenuItemList = () => {
  const self = useSelf();
  const [signOut, _state] = useSignOut();

  if (self === undefined) {
    return (
      <>
        <Link href={registerUrl()}>
          <Menu.Item>Register</Menu.Item>
        </Link>
        <Link href={signInUrl()}>
          <Menu.Item>Sign in</Menu.Item>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Menu.Item onClick={signOut}>
          Sign out
        </Menu.Item>
      </>
    )
  }
};

export default UserMenuItemList;