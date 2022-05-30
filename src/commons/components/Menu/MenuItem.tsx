import React from 'react';

import styles from './MenuItem.module.scss';

interface MenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const MenuItem = React.forwardRef(
  (props: MenuItemProps, ref: React.Ref<HTMLLIElement>) => {
    const { children, onClick } = props;
  
    return (
      <li className={styles.menuItem} onClick={onClick} ref={ref}>
        { children }
      </li>
    );
  }
);

export default MenuItem;
