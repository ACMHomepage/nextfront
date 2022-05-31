import { HTMLInputTypeAttribute, useRef, useState } from 'react';
import classNames from 'classnames';
import ClickAwayListener from 'react-click-away-listener';

import styles from './Input.module.scss';

interface InputProps {
  label: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

interface State {
  inputed: boolean;
  focus: boolean;
}

const Input = (props: InputProps) => {
  const {
    label,
    className,
    type,
    onChange: onChangeRaw = () => null
  } = props;
  const [state, setState] = useState<State>({ inputed: false, focus: false });
  const ref = useRef<HTMLInputElement | null>(null);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (value !== '' && !state.inputed) {
      setState({ inputed: true, focus: true });
    } else if (value === '' && state.inputed) {
      setState({ inputed: false, focus: true });
    }
    onChangeRaw(event);
  };

  const onClickAway = () => {
    if (state.focus) {
      setState({ ...state, focus: false });
    }
  };

  const onClick = () => {
    if (!state.focus) {
      setState({ ...state, focus: true });
    }
    if (ref.current !== null) {
      ref.current.focus();
    }
  }

  let labelClassName = styles.label;
  if (state.focus) {
    labelClassName = classNames(labelClassName, styles.st_state_focus);
  }
  if (state.inputed) {
    labelClassName = classNames(labelClassName, styles.st_state_inputed);
  }
  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <div className={classNames(styles.input, className)} onClick={onClick}>
        <label className={labelClassName}>{ label }</label>
        <input
          type={type}
          className={styles.inputRaw}
          ref={ref}
          onChange={onChange}
          onFocus={onClick}
        />
      </div>
    </ClickAwayListener>
  );
};

export default Input;