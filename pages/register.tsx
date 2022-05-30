import type { NextPage } from 'next';
import RegisterPage from 'src/features/auth/pages/Register';

const url = () => '/register';

const Register: NextPage = () => {
  return (
    <>
      <RegisterPage />
    </>
  );
};

export default Register;

export { url };