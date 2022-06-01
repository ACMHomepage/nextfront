import React, { useState } from 'react';
import { User } from 'lucide-react';

import Button from "src/commons/components/Button";
import Avatar from "src/features/user/components/Avatar";
import Popover from 'src/commons/components/Popover';
import Menu from 'src/commons/components/Menu';

import AuthMenuItemList from 'src/features/auth/components/AuthMenuItemList';

const UserButton = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const onClickaway = () => {
    setAnchorEl(null);
  }

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (anchorEl !== null) {
      setAnchorEl(null);
    } else {
      setAnchorEl(e.currentTarget);
    }
  }

  return (
    <>
      <Button variant='icon' onClick={onClick}>
        <Avatar self />
      </Button>
      <Popover anchorEl={anchorEl} onClickAway={onClickaway}>
        <Menu>
          <AuthMenuItemList />
        </Menu>
      </Popover>
    </>
  );
};

export default UserButton;
