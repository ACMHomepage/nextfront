import React, { useEffect, useRef } from 'react';
import { computePosition, offset } from '@floating-ui/dom';
import throttle from 'lodash/throttle';

import Modal from "src/commons/components/Modal";

interface PopoverProps {
  anchorEl: HTMLElement | null;
  onClickAway?: (event: Event) => void;
  children: React.ReactNode;
}

const Popover = (props: PopoverProps) => {
  const { anchorEl, onClickAway, children } = props;

  let ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(!anchorEl) return;
    if(!ref.current) return;

    const updatePosition = () => {
      if(!anchorEl) return;
      if(!ref.current) return;

      computePosition(anchorEl, ref.current, {
        placement: 'bottom-end',
        middleware: [ offset(4) ],
      }).then(({ x, y }) => {
        Object.assign(ref.current!.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    };

    updatePosition();
    const throttleUpdatePosition = throttle(updatePosition, 5);

    window.addEventListener('resize', throttleUpdatePosition);
    window.addEventListener('scroll', updatePosition);
    return () => {
      window.removeEventListener('resize', throttleUpdatePosition);
      window.removeEventListener('scroll', updatePosition);
    }
  }, [anchorEl, ref]);

  if (!anchorEl) return null;

  return (
    <Modal onClickAway={onClickAway} ref={ref} >
      { children }
    </Modal>
  )
};

export default Popover;
