import { useState } from 'react';

import Input from "src/commons/components/Input";
import Button from "src/commons/components/Button";

import { useRegister } from "../../apis";

import styles from './RegisterBox.module.scss';

const RegisterBox = () => {
  const [register, state] = useRegister();
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.registerBox}>
      <h1 className={styles.header}>Hello New ACMer</h1>
      <p className={styles.par}>
        Please enter your details to register.
      </p>
      <Input
        className={styles.input}
        label="Email"
        onChange={event => setEmail(event.target.value)}
      />
      <Input
        className={styles.input}
        label="Nick name"
        onChange={event => setNickName(event.target.value)}
      />
      <Input
        className={styles.input}
        label="Password"
        type="password"
        onChange={event => setPassword(event.target.value)}
      />
      <Button
        className={styles.registerButton}
        variant="outline"
        onClick={() => register(email, nickName, password)}
      >
        Register
      </Button>
    </div>
  );
};

export default RegisterBox;