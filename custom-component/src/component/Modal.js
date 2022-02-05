import { useState } from 'react';
import '../styles/Modal.scss';

const Modal = () => {
  const [isPopuped, setPopup] = useState(false);

  const closeModal = (e) => {
    const modal = document.querySelector('.modal-component');
    modal.classList.add('hidden');
    setPopup(!isPopuped);
  };

  const openModal = (e) => {
    const modal = document.querySelector('.modal-component');
    modal.classList.remove('hidden');
    setPopup(!isPopuped);
  };

  return (
    <div className="component-container">
      <div className="component-title">
        <h3>Modal</h3>
      </div>

      <div className="component-inner">
        <button type="button" className="btn-open" onClick={openModal}>
          Open Modal
        </button>
      </div>

      <div className="modal-component hidden">
        <div className="dimmed-layer"></div>
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            onClick={closeModal}
          ></button>
          <p>Hello Codestates!</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
