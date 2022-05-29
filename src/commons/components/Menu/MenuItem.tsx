import React from 'react';

import styles from './MenuItem.module.scss';

interface MenuItemProps {
  children: React.ReactNode;
  onClick: () => void;
}

const MenuItem = (props: MenuItemProps) => {
  const { children, onClick } = props;

  return (
    <li className={styles.menuItem} onClick={onClick}>
      { children }
    </li>
  );
}

export default MenuItem;