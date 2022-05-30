import { useState } from "react";

import Input from "src/commons/components/Input";
import Button from "src/commons/components/Button";

import { useSignIn } from "../../apis";

import styles from './SignInBox.module.scss';

const SignInBox = () => {
  const [signIn, state] = useSignIn();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.signInBox}>
      <h1 className={styles.header}>Welcome Back</h1>
      <p className={styles.par}>
        Please enter your email and password to sign in.
      </p>
      <Input
        className={styles.input}
        label="Email"
        onChange={event => setEmail(event.target.value)}
      />
      <Input
        className={styles.input}
        label="Password"
        type="password"
        onChange={event => setPassword(event.target.value)}
      />
      <Button
        className={styles.signInButton}
        variant="outline"
        onClick={() => signIn(email, password)}
      >
        Sign in
      </Button>
    </div>
  );
};

export default SignInBox;