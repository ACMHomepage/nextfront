import Input from "src/commons/components/Input";
import Button from "src/commons/components/Button";

import styles from './SignInBox.module.scss';

const SignInBox = () => {
  return (
    <div className={styles.signInBox}>
      <h1 className={styles.header}>Welcome Back</h1>
      <p className={styles.par}>
        Please enter your email and password to sign in.
      </p>
      <Input className={styles.input} label="Email" />
      <Input className={styles.input} label="Password" type="password" />
      <Button className={styles.signInButton} variant="outline">
        Sign in
      </Button>
    </div>
  );
};

export default SignInBox;