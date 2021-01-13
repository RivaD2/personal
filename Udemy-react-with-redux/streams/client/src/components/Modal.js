import React from 'react'
import ReactDOM from 'react-dom';

const Modal = props => {
  /*
   Create protal takes two args, 
   JSX and reference to element we want to render Portal into*/
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        Modal Window
      </div>
    </div>,
     document.querySelector('#modal')
  )
}

export default Modal;