import Link from 'next/link';

import { Url } from 'pages/index';

import Icon from "src/commons/components/Icon";
import Button from "src/commons/components/Button";
import Flex from "src/commons/layouts/Flex";

import AcmHomepage from './assets/AcmHomepage.svg';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={Url()}>
          <Button variant="outline">
            <Icon from={AcmHomepage} variant="lg" />
          </Button>
        </Link>
        <Flex />
        <span>End</span>
      </nav>
    </header>
  )
}

export default Nav;