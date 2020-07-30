import React from 'react';
import { createPortal } from 'react-dom';

const JSX_MODAL = (
  <div className="modal__outer">
    <div className="modal__inner">
      <p>Login Form</p>
    </div>
  </div>
)

function Modal(props) {
  return createPortal(JSX_MODAL, document.getElementById('modal'))
}

export default Modal;