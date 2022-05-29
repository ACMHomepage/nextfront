import React from 'react';
import classNames from 'classnames';

import styles from './Icon.module.scss';

interface IconProps {
  variant?: 'sm' | 'default' | 'lg' | 'xl';
  widthAuto?: boolean;
  from: React.ComponentType<{ className: string }>;
}

const Icon = (props: IconProps) => {
  const { variant = 'default', widthAuto = false, from: From } = props;

  const classNameVariant = {
    sm: styles.va_sm,
    default: styles.va_default,
    lg: styles.va_lg,
    xl: styles.va_xl,
  }
  let className = classNameVariant[variant];
  if (widthAuto) {
    className = classNames(className, styles.po_widthAuto);
  }

  return <From className={className} />;
};

export default Icon;