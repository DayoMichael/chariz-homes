import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const PinInput = ({ label, length, onChange }) => {
    const [otp, setOtp] = useState(Array(length).fill(''));
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        onChange(newOtp.join('')); // Send the complete OTP to the parent component
        if (value && index < length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && index > 0 && !otp[index]) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <Styles>
            <div className='mt-4 w-full'>
                <p className='text-sm label'>{label}</p>
                <div className='flex w-full gap-6 input-field justify-center items-center mt-2'>
                    {otp.map((digit, index) => (
                        <input
                            ref={el => (inputRefs.current[index] = el)}
                            key={index}
                            type="password"
                            className='otp-digit'
                            value={digit}
                            onChange={e => handleChange(index, e.target.value)}
                            onKeyDown={e => handleKeyDown(e, index)}
                            maxLength={1}
                        />
                    ))}
                </div>
            </div>
        </Styles>
    );
};

export default PinInput;

const Styles = styled.div`
    width: 100%;
    .input-field {
        display: flex;
        gap: 8px;
    }
    .otp-digit {
        border: 2px solid #F29254;
        border-radius: 8px;
        width: 53px;
        height: 55px;
        padding: 0;
        text-align: center;
        font-size: 24px;
        background: #FFFFFF;
        outline: none;
    }
    .label {
        color: #858585;
        font-size: 16px;
        font-weight: 600;
    }
`;

PinInput.propTypes = {
    label: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};
