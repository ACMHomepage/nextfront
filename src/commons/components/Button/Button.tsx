import React, { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps {
  variant: 'outline' | 'icon' | 'filled';
  children: React.ReactNode;
  size?: 'default' | 'lg';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const {
      children,
      className: classNameBase,
      variant,
      size = 'default',
      onClick,
    } = props;
  
    const classNameVariant = {
      outline: styles.va_outline,
      icon: styles.va_icon,
      filled: styles.va_filled,
    };
    const classNameSize = {
      default: styles.po_size_default,
      lg: styles.po_size_lg,
    };
    const className = classNames(
      styles.button,
      classNameVariant[variant],
      classNameSize[size],
      classNameBase,
    );
  
    return (
      <button className={className} onClick={onClick} ref={ref}>
        { children }
      </button>
    );
  }
);

export default Button;