import React, { useState } from 'react';
import { User } from 'lucide-react';
import Link from 'next/link';

import Button from "src/commons/components/Button";
import Icon from "src/commons/components/Icon";
import Popover from 'src/commons/components/Popover';
import Menu from 'src/commons/components/Menu';

const UserButton = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const onClickaway = () => {
    setAnchorEl(null);
  }

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(e.currentTarget);
    }
  }

  return (
    <>
      <Button variant='icon' onClick={onClick}>
        <Icon from={User} />
      </Button>
      <Popover anchorEl={anchorEl} onClickAway={onClickaway}>
        <Menu>
          <Link href="/sign-in">
            <Menu.Item>Sign in</Menu.Item>
          </Link>
          <Link href="/register">
            <Menu.Item>Register</Menu.Item>
          </Link>
        </Menu>
      </Popover>
    </>
  );
};

export default UserButton;