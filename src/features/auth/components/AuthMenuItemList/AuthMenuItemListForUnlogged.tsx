import Link from "next/link";

import { url as registerUrl } from 'pages/register';
import { url as signInUrl } from 'pages/sign-in';

import Menu from "src/commons/components/Menu";

const AuthMenuItemListForUnlogged = () => {
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

export default AuthMenuItemListForUnlogged;