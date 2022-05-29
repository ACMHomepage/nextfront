import React from 'react';

import styles from './Icon.module.scss';

interface IconProps {
  variant?: 'sm' | 'default' | 'lg' | 'xl';
  from: React.ComponentType<{ className: string }>;
}

const Icon = (props: IconProps) => {
  const { variant = 'default', from: From } = props;

  const className = {
    sm: styles.va_sm,
    default: styles.va_default,
    lg: styles.va_lg,
    xl: styles.va_xl,
  }

  return <From className={className[variant]} />;
};

export default Icon;