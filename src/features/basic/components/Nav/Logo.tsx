import Link from 'next/link';

import { url } from 'pages/index';

import Button from "src/commons/components/Button";
import Icon from "src/commons/components/Icon";

import AcmHomepage from './assets/AcmHomepage.svg';

const Logo = () => {
  return (
    <Link href={url()}>
      <Button variant="outline">
        <Icon from={AcmHomepage} variant="lg" widthAuto />
      </Button>
    </Link>
  );
};

export default Logo;