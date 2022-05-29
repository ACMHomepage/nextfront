import Nav from 'src/commons/components/Nav';

import RegisterBox from 'src/features/auth/components/RegisterBox';

import styles from './Register.module.scss';

const Register = () => {
  return (
    <>
      <Nav />
      <div className={styles.box}>
        <RegisterBox />
      </div>
    </>
  )
};

export default Register;