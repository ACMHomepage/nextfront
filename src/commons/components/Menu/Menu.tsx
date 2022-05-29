import React from 'react';

import styles from './Menu.module.scss';

interface MenuProps {
  children: React.ReactNode;
}

const Menu = (props: MenuProps) => {
  const { children } = props;

  return (
    <menu className={styles.menu}>
      { children }
    </menu>
  )
}

export default Menu;