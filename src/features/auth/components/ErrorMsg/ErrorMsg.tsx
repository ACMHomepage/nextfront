import styles from './ErrorMsg.module.scss';

interface ErrorMsgProps {
  state: {
    error?: {
      message: string;
    }
  };
}

const ErrorMsg = (props: ErrorMsgProps) => {
  const { state } = props;

  const message = state.error?.message;
  if (message === undefined) {
    return null;
  }

  return (
    <div className={styles.errorMsg}>{message}</div>
  );
}

export default ErrorMsg;