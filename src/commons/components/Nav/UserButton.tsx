import React, { useState } from 'react';
import { User } from 'lucide-react';

import Button from "src/commons/components/Button";
import Icon from "src/commons/components/Icon";
import Popover from '../Popover';

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
        Hello World, And User Menu...
      </Popover>
    </>
  );
};

export default UserButton;