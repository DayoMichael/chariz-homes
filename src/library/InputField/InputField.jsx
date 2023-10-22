import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

function InputField({ label, placeholder, value, onChange, labelCenter, ...rest }) {
    return (
        <Styles>
            <div className='mt-6 w-full'>
                <p className={`text-lg label ${labelCenter ? "text-center w-full" : ""}`}>{label}</p>
                <input
                    className='input-field mt-2 w-full text-left'
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    {...rest}
                />
            </div>
        </Styles>
    )
}

export default InputField

const Styles = styled.div`
    width: 100%;
    .input-field{
        border-radius: 4px;
        border: 1px solid #32454C;
        background: #0E1A20;
        padding: 16px;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
    }
    .label {
        color: #B3B3B3;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
    }

`

InputField.propTypes = {
    label: PropTypes?.string?.isRequired,
    placeholder: PropTypes?.string,
    value: PropTypes?.string,
    onChange: PropTypes?.func?.isRequired,
    labelCenter: PropTypes?.bool,
};