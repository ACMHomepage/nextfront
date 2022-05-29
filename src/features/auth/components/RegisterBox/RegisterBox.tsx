import Input from "src/commons/components/Input";
import Button from "src/commons/components/Button";

import styles from './RegisterBox.module.scss';

const RegisterBox = () => {
  return (
    <div className={styles.registerBox}>
      <h1 className={styles.header}>Hello New ACMer</h1>
      <p className={styles.par}>
        Please enter your details to register.
      </p>
      <Input className={styles.input} label="Email" />
      <Input className={styles.input} label="Nick name" />
      <Input className={styles.input} label="Password" type="password" />
      <Button className={styles.registerButton} variant="outline">
        Register
      </Button>
    </div>
  );
};

export default RegisterBox;