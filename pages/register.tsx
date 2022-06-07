import type { NextPage } from 'next';
import Head from 'next/head';

import RegisterPage from 'src/features/auth/pages/Register';

const url = () => '/register';

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register | ACM Homepage</title>
      </Head>
      <RegisterPage />
    </>
  );
};

export default Register;

export { url };