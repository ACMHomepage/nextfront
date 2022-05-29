import Link from 'next/link';
import { User } from 'lucide-react';

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
            <Icon from={AcmHomepage} widthAuto />
          </Button>
        </Link>
        <Flex />
        <Button variant='icon'>
          <Icon from={User} />
        </Button>
      </nav>
    </header>
  )
}

export default Nav;