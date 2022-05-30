import type { NextPage } from 'next';
import SignInPage from 'src/features/auth/pages/SignIn';

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