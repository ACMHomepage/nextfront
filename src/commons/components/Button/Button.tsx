import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps {
  variant: 'outline';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { children, variant, onClick } = props;

  const classNameVariant = {
    outline: styles.va_outline,
  };
  const className = classNames(styles.button, classNameVariant[variant]);

  return (
    <button className={className} onClick={onClick}>
      { children }
    </button>
  );
};

export default Button;