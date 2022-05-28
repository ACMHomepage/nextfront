import Box from "src/commons/layouts/Box";
import Flex from "src/commons/layouts/Flex";

import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span>Hello</span>
        <Flex />
        <span>End</span>
      </nav>
    </header>
  )
}

export default Nav;