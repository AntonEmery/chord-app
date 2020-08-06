import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../components/buttons/Button';
import { ReactComponent as CloseIcon } from '../svg/close-icon.svg';


const Modal = (props) => {
  return (
    ReactDOM.createPortal(
    <div className="modal" onClick={props.hide}>
      <div className="modal__inner" style={{width: props.width}}>
        <div className="modal__header">
          <Button onClick={props.hide} className='button--transparent button--icon'>
            <CloseIcon />
          </Button>
        </div>
        {props.children}
      </div>
    </div>,
    document.getElementById('modal-root')
  )
  )
  }

export default Modal;