import React from 'react';
import { ModalStyles } from './ModalStyles';
import PropTypes from "prop-types"

function Modal({children, className,}) {
    return (
        <ModalStyles>
            <div id="myModal" className="modal">
                <div className="modal-content md:max-w-[775px] bg-[#32454C]">
                    <div className={className}>{children}</div>
                </div>

            </div>
        </ModalStyles>
    )
}

export default Modal

Modal.propTypes = {
    children: PropTypes?.any,
    className: PropTypes?.string,
    onClose: PropTypes?.func
};