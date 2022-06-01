import React from 'react';
import classNames from 'classnames';

import styles from './MenuItem.module.scss';

interface MenuItemProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MenuItem = React.forwardRef(
  (props: MenuItemProps, ref: React.Ref<HTMLLIElement>) => {
    const { children, onClick, className: classNameBase } = props;
    const className = classNames(styles.menuItem, classNameBase);
  
    return (
      <li className={className} onClick={onClick} ref={ref}>
        { children }
      </li>
    );
  }
);

export default MenuItem;
