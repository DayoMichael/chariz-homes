import React, { useRef } from 'react';
import { ModalStyles } from './ModalStyles';
import PropTypes from "prop-types"

function Modal({ isOpen, onClose, children, className }) {
  const modalRef = useRef();

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  return (
    <ModalStyles>
      {isOpen && (
        <div className="modal-overlay" onClick={handleOutsideClick}>
          <div id="myModal" className="modal">
            <div className="modal-content md:max-w-[775px] bg-[#32454C]">
              <div ref={modalRef}  className={className}>{children}</div>
            </div>
          </div>
        </div>
      )}
    </ModalStyles>
  );
}

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
};
