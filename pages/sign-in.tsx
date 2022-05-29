import type { NextPage } from 'next';
import SignInPage from 'src/pages/SignIn';

const url = () => '/sign-in';

const SignIn: NextPage = () => {
  return (
    <>
      <SignInPage />
    </>
  )
};

export default SignIn;

export { url };