import React, { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps {
  variant: 'outline' | 'icon';
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const { children, variant, onClick } = props;
  
    const classNameVariant = {
      outline: styles.va_outline,
      icon: styles.va_icon,
    };
    const className = classNames(styles.button, classNameVariant[variant]);
  
    return (
      <button className={className} onClick={onClick} ref={ref}>
        { children }
      </button>
    );
  }
);

export default Button;