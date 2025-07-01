import type { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({ isOpen, onClose, children }: PropsWithChildren<ModalProps>) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <section className="modal">
      <div className="modal__content">
        <button className="modal__button" onClick={onClose}>
          Закрыть
        </button>
        {children}
      </div>
    </section>,
    document.getElementsByClassName("profile")[0]!,
  );
};
