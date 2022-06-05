import { useEffect } from "react";
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";
import {Overlay, ModalParams} from "./Modal.styled"
const modalRoot = document.querySelector('#modal-root');


export default function Modal({ largeImageURL, onModalClose}){

  useEffect(() => {
    window.addEventListener('keydown', handleEscKey)
    return () => {
      window.removeEventListener('keydown', handleEscKey)
    }
  });
 
  const handleOverlayclick = (e) => {   
    if (e.target === e.currentTarget) {
      onModalClose()
    }
  }

  const handleEscKey = (e) => {
    if (e.code === "Escape") {
    onModalClose()
    }
  }

return (createPortal(   
  <Overlay onClick ={handleOverlayclick}>
    <ModalParams >
      <img src={largeImageURL} alt="" />
    </ModalParams>
  </Overlay>, modalRoot))
     
}

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  onModalClose: PropTypes.func.isRequired
}