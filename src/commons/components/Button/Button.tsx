import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps {
  variant: 'outline';
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { children, variant } = props;

  const classNameVariant = {
    outline: styles.va_outline,
  };
  const className = classNames(styles.button, classNameVariant[variant]);

  return (
    <button className={className}>
      { children }
    </button>
  );
};

export default Button;