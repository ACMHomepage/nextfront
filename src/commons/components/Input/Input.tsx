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

type State = 'inputed' | 'inputed-focus' | 'uninputed' | 'uninputed-focus';

const Input = (props: InputProps) => {
  const {
    label,
    className,
    type,
    onChange: onChangeRaw = () => null
  } = props;
  const [state, setState] = useState<State>('uninputed');
  const ref = useRef<HTMLInputElement | null>(null);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (value !== '' && state !== 'inputed-focus') {
      setState('inputed-focus');
    } else if (value === '' && state !== 'uninputed-focus') {
      setState('uninputed-focus');
    }
    onChangeRaw(event);
  };

  const onClickAway = () => {
    if (state === 'uninputed-focus') {
      setState('uninputed');
    } else if (state === 'inputed-focus') {
      setState('inputed');
    }
  }

  const onClick = () => {
    if (state === 'uninputed') {
      setState('uninputed-focus');
    } else if (state === 'inputed') {
      setState('inputed-focus');
    }
    if (ref.current !== null) {
      ref.current.focus();
    }
  }

  let labelClassName = styles.label;
  if (state === 'inputed-focus') {
    labelClassName = classNames(labelClassName, styles.st_inputedFocus);
  } else if (state === 'uninputed-focus') {
    labelClassName = classNames(labelClassName, styles.st_uninputedFocus);
  } else if (state === 'inputed') {
    labelClassName = classNames(labelClassName, styles.st_inputed);
  } else {
    labelClassName = classNames(labelClassName, styles.st_uninputed);
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