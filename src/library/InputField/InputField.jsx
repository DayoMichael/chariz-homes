import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import eyeIcon from '../../assets/la-icons/eye-icon.svg';
import eyeOffIcon from '../../assets/la-icons/eye-icon.svg';

function InputField({ label, placeholder, value, onChange, labelCenter, labelClassname, showIcon, icon, type, className, ...rest }) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Styles>
            <div className='mt-4 w-full'>
                <p className={`text-sm label ${labelClassname} ${labelCenter ? "text-center w-full" : ""}`}>{label}</p>
                <div className='flex w-full justify-between input-field items-center mt-2'>
                    {showIcon && <img src={icon} />}
                    <input
                        className={`w-full text-left ml-2 text-sm  ${className}`}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        type={showPassword ? 'text' : type} // Toggle between 'password' and 'text' type
                        {...rest}
                    />
                    {type === 'password' && ( // Show the eye icon only if type is 'password'
                        <img src={showPassword ? eyeOffIcon : eyeIcon} onClick={togglePasswordVisibility} alt="Toggle Password Visibility" />
                    )}
                </div>
            </div>
        </Styles>
    )
}

export default InputField;

const Styles = styled.div`
    width: 100%;
    .input-field{
        border-radius: 110px;
        border: 2px solid #F29254;
        background: #ffffff;
        padding: 16px;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
    }
    .label {
        color: #858585;
        font-style: normal;
        font-weight: 600;
    }
`;
