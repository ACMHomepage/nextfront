import Flex from "src/commons/layouts/Flex";

import Logo from './Logo';
import UserButton from "./UserButton";

import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo />
        <Flex />
        <UserButton />
      </nav>
    </header>
  )
}

export default Nav;