import React, { useRef, useState } from 'react';
import classNames from 'classnames';

import styles from './TextArea.module.scss';

interface InputProps {
  label: string;
  size?: 'default' | 'lg';
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

interface State {
  inputed: boolean;
}

const Input = (props: InputProps) => {
  const {
    label,
    onChange: onChangeBase = () => null,
    size = 'default',
  } = props;
  const [state, setState] = useState<State>({ inputed: false });
  const ref = useRef<HTMLTextAreaElement | null>(null);

  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const value = event.target.value;
    if (value !== '' && !state.inputed) {
      setState({ inputed: true });
    } else if (value === '' && state.inputed) {
      setState({ inputed: false });
    }
    onChangeBase(event);
  }

  const onClick = () => {
    if (ref.current !== null) {
      ref.current.focus();
    }
  }

  let labelClassName = styles.label;
  let inputClassName = styles.input;
  if (size === 'lg') {
    labelClassName = classNames(labelClassName, styles.po_size_lg);
    inputClassName = classNames(inputClassName, styles.po_size_lg);
  }
  if (state.inputed) {
    labelClassName = classNames(labelClassName, styles.st_state_inputed);
  }

  return (
    <div className={styles.inputWrapper}>
      <label className={labelClassName} onClick={onClick}>
        {label}
      </label>
      <textarea
        ref={ref}
        onChange={onChange}
        onFocus={onClick}
        className={inputClassName}
      />
    </div>
  )
}

export default Input;