import React, { useState } from 'react';

import Button from "src/commons/components/Button";
import Avatar from "src/features/user/components/Avatar";
import Popover from 'src/commons/components/Popover';
import Menu from 'src/commons/components/Menu';

import ProfileMenuItemList from 'src/features/user/components/ProfileMenuItemList';
import AuthMenuItemList from 'src/features/auth/components/AuthMenuItemList';
import NewsMenuItemList from 'src/features/news/components/NewsMenuItemList';

import styles from './UserButton.module.scss';

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
      <Button variant='icon' onClick={onClick} className={styles.button}>
        <Avatar self />
      </Button>
      <Popover anchorEl={anchorEl} onClickAway={onClickaway}>
        <Menu>
          <ProfileMenuItemList />
          <NewsMenuItemList />
          <AuthMenuItemList />
        </Menu>
      </Popover>
    </>
  );
};

export default UserButton;
