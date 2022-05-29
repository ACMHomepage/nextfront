import Input from "src/commons/components/Input";

import styles from './SignInBox.module.scss';

const SignInBox = () => {
  return (
    <div className={styles.signInBox}>
      <Input label="Email" />
      <Input label="Password" type="password" />
    </div>
  );
};

export default SignInBox;