import Nav from 'src/features/misc/components/Nav';

import SignInBox from 'src/features/auth/components/SignInBox';

import styles from './SignIn.module.scss';

const SignIn = () => {
  return (
    <>
      <Nav />
      <div className={styles.box}>
        <SignInBox />
      </div>
    </>
  )
};

export default SignIn;