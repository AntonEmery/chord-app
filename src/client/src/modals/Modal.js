import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => (
  ReactDOM.createPortal(
    <div className="modal" onClick={props.hide}>
      {props.children}
    </div>,
    document.getElementById('modal-root')
  )
)

export default Modal;