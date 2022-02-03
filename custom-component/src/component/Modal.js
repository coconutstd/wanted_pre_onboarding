import { useState } from 'react';
import '../styles/Modal.scss';

const Modal = () => {
  const [isPopuped, setPopup] = useState(false);

  const closeModal = (e) => {
    const modal = document.querySelector('.modal-component');
    modal.classList.add('hidden');
    setPopup(false);
  };

  const openModal = (e) => {
    const modal = document.querySelector('.modal-component');
    modal.classList.remove('hidden');
    setPopup(true);
  };

  return (
    <div className="container">
      <h3>Modal</h3>
      <div>
        <button type="button" className="modal-button" onClick={openModal}>
          Open Modal
        </button>
      </div>
      <div className="modal-component">
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
