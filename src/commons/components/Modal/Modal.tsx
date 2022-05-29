import ReactDom from 'react-dom';
import ClickAwayListener from 'react-click-away-listener';
import React, { forwardRef } from 'react';

import styles from './Modal.module.scss';

interface ModalProps {
  onClickAway?: (event: Event) => void;
  children: React.ReactNode;
}

const Modal = forwardRef((props: ModalProps, ref: React.Ref<HTMLDivElement>) => {
  const { onClickAway = () => null, children } = props;

  const modalRoot = document.getElementById('modal');

  return ReactDom.createPortal(
    <ClickAwayListener onClickAway={onClickAway}>
      <div ref={ref} className={styles.modal}>
        { children }
      </div>
    </ClickAwayListener>,
    modalRoot!
  );
});

export default Modal;