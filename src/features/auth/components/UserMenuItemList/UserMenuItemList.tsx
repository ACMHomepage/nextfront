import Link from 'next/link';

import Menu from 'src/commons/components/Menu';

import { url as registerUrl } from 'pages/register';
import { url as signInUrl } from 'pages/sign-in';

const UserMenuItemList = () => {
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
};

export default UserMenuItemList;