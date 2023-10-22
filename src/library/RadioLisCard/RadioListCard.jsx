import React from 'react';
import PropTypes from "prop-types";

import RadioOffIcon from "../../assets/icons/radio-off-input.svg";
import RadioCheckIcon from "../../assets/icons/radio-check-icon.svg";
function RadioListCard({
    active,
    icon,
    heading,
    subHeading,
}) {
    return (
        <div className='p-3.5 w-full bg-[#0E1A20] flex justify-between rounded mt-2'>
            <div className='flex items-center'>
                <div className='w-5 h-5'>
                    <img src={active ? RadioCheckIcon : RadioOffIcon} />
                </div>
                {icon && <div className='ml-4'>
                    <div className='w-8 h-8 rounded-full'>
                        <img src={icon} />
                    </div>
                </div>}
                <div className='ml-2'>
                    <p className='font-bold'>{heading}</p>
                    <p className='mt-1 text-xs text-[#979797]'>{subHeading}</p>
                </div>

            </div>

        </div>
    )
}

export default RadioListCard

RadioListCard.propTypes = {
    active: PropTypes?.bool,
    icon: PropTypes?.string,
    heading: PropTypes?.string,
    subHeading: PropTypes?.string,
};