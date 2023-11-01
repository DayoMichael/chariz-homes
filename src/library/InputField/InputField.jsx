import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';


function InputField({ label, placeholder, value, onChange, labelCenter, labelClassname, showIcon, icon, ...rest }) {
    return (
        <Styles>
            <div className='mt-4 w-full'>
                <p className={`text-lg label ${labelClassname} ${labelCenter ? "text-center w-full" : ""}`}>{label}</p>
                <div className='flex w-full justify-between input-field'>
                    <input
                        className=' mt-2 w-full text-left'
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        {...rest}
                    />
                    {showIcon && <img src={icon} />}

                </div>

            </div>
        </Styles>
    )
}

export default InputField

const Styles = styled.div`
    width: 100%;
    .input-field{
        border-radius: 8px;
        border: 1px solid #D9D9D9;
        background: #ffffff;
        padding: 16px;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
    }
    .label {
        color: #000000;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
    }

`

InputField.propTypes = {
    label: PropTypes?.string?.isRequired,
    placeholder: PropTypes?.string,
    value: PropTypes?.string,
    onChange: PropTypes?.func?.isRequired,
    labelCenter: PropTypes?.bool,
    labelClassname: PropTypes?.string,
    showIcon: PropTypes?.bool,
    icon: PropTypes?.any
};