import type { NextPage } from 'next';
import Head from 'next/head';

import SignInPage from 'src/features/auth/pages/SignIn';

const url = () => '/sign-in';

const SignIn: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign in | ACM Homepage</title>
      </Head>
      <SignInPage />
    </>
  )
};

export default SignIn;

export { url };