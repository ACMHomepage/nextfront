import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';

interface InputProps {
  label: string;
  value?: string;
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

interface State {
  inputed: boolean;
}

const Input = (props: InputProps) => {
  const {
    label,
    size = 'default',
    value,
    className,
    onChange: onChangeBase = () => null,
    onKeyDown = () => null,
  } = props;
  const [state, setState] = useState<State>({ inputed: false });
  const [selfValue, setSelfValue] = useState('');
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const showValue = value ?? selfValue;
    if (showValue !== '' && !state.inputed) {
      setState({ inputed: true });
    } else if (showValue === '' && state.inputed) {
      setState({ inputed: false });
    }
  }, [value, selfValue]);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    setSelfValue(value);
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
  } else if (size === 'sm') {
    labelClassName = classNames(labelClassName, styles.po_size_sm);
    inputClassName = classNames(inputClassName, styles.po_size_sm);
  }
  if (state.inputed) {
    labelClassName = classNames(labelClassName, styles.st_state_inputed);
  }

  return (
    <div className={classNames(styles.inputWrapper, className)}>
      <label className={labelClassName} onClick={onClick}>
        {label}
      </label>
      <input
        ref={ref}
        value={value ?? selfValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onFocus={onClick}
        className={inputClassName}
      />
    </div>
  )
}

export default Input;