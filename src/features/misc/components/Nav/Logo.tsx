import Link from 'next/link';

import { url } from 'pages/index';

import Button from "src/commons/components/Button";
import Icon from "src/commons/components/Icon";

import AcmHomepage from './assets/AcmHomepage.svg';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link href={url()}>
      <Button variant="outline" className={styles.logo}>
        <Icon from={AcmHomepage} variant="lg" widthAuto />
      </Button>
    </Link>
  );
};

export default Logo;