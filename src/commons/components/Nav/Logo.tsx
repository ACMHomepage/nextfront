import Link from 'next/link';

import { Url } from 'pages/index';

import Button from "src/commons/components/Button";
import Icon from "src/commons/components/Icon";

import AcmHomepage from './assets/AcmHomepage.svg';

const Logo = () => {
  return (
    <Link href={Url()}>
      <Button variant="outline">
        <Icon from={AcmHomepage} widthAuto />
      </Button>
    </Link>
  );
};

export default Logo;