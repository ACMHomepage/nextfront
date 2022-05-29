import type { NextPage } from 'next';
import RegisterPage from 'src/pages/Register';

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