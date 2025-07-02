import type { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
  isOpen: boolean;
};

export const Modal = ({ isOpen, children }: PropsWithChildren<ModalProps>) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(<>{children}</>, document.getElementsByClassName('profile')[0]!);
};
