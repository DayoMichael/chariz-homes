import React from 'react';
import PropTypes from "prop-types"

import AddToCartIcon from "../../../assets/icons/add-to-cart-icon.svg";
import Modal from '../../../library/Modal/Modal';


function ReuseableContent({onClose, icon, heading, onProceed, dismissText, proceedText }) {
    const closeModal = () => {
        onClose()
    }
    return (
            <div className='flex flex-col justify-center items-center mt-10'>
                {icon && <img src={icon} />}
                <p className='text-2xl font-semibold mt-2 '>{heading}</p>
                <div className='flex w-full mt-12 justify-between max-w-[90%] mb-10'>
                    {dismissText &&<button className='text-lg py-3.5 w-[268px] bg-[#414E54] rounded-lg' onClick={onClose}>
                        {dismissText}
                    </button>}
                    <button className='text-lg py-3.5 w-[268px] bg-[#02CB63] rounded-lg' onClick={onProceed}>
                        {proceedText}
                    </button>

                </div>
            </div>
    )
}

export default ReuseableContent

ReuseableContent.propTypes = {
    onClose: PropTypes?.func,
    onProceed: PropTypes?.func,
    icon: PropTypes?.any,
    heading: PropTypes?.any,
    proceedText: PropTypes?.any,
    dismissText: PropTypes?.any,
};