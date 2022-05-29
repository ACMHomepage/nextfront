import Icon from "src/commons/components/Icon";
import Flex from "src/commons/layouts/Flex";

import AcmHomepage from './assets/AcmHomepage.svg';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Icon from={AcmHomepage} />
        <Flex />
        <span>End</span>
      </nav>
    </header>
  )
}

export default Nav;