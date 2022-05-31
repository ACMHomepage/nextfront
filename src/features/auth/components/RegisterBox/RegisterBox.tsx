import { useState } from 'react';

import { url as profileUrl } from 'pages/profile';

import Input from "src/commons/components/Input";
import Button from "src/commons/components/Button";
import ErrorMsg from '../ErrorMsg';

import { useRegister } from "../../apis";

import styles from './RegisterBox.module.scss';

const RegisterBox = () => {
  const [register, state] = useRegister();
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const onClick = async () => {
    await register(
      { email, nickname, password },
      { url: profileUrl() }
    );
  }

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
        onChange={event => setNickname(event.target.value)}
      />
      <Input
        className={styles.input}
        label="Password"
        type="password"
        onChange={event => setPassword(event.target.value)}
      />
      <ErrorMsg state={state}/>
      <Button
        className={styles.registerButton}
        variant="outline"
        onClick={onClick}
      >
        Register
      </Button>
    </div>
  );
};

export default RegisterBox;