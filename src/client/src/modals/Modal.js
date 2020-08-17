import React, { useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Button from '../components/buttons/Button';
import { ReactComponent as CloseIcon } from '../svg/close-icon.svg';

const modalRoot = document.getElementById('modal-root');

const Modal = (props) => {


  const handleChildClick = (e) => {
    e.stopPropagation();
  }

  const closeModal = (e, props) => {
    e.stopPropagation();
    props.hide();
  }

  return (
    ReactDOM.createPortal(
      <div className="modal__overlay" onClick={props.hide}>
        <div className="modal__inner" style={{width: props.width}} onClick={handleChildClick}>
          <div className="modal__header">
            <Button onClick={(e) => closeModal(e, props)} className='button--transparent button--icon'>
              <CloseIcon />
            </Button>
          </div>
          {props.children}
        </div>
      </div>,
      modalRoot
    )
  )
}

export default Modal;