import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DropdownArrow from "../../assets/icons/dropdown-arrow.svg";
import { styled } from 'styled-components';

function Dropdown({ labelCenter, label, list }) {
    const [dropDownActive, setDropDownActive] = useState(false)
    const [selectedItem, setSelectedItem] = useState({})
    console.log(list, "list")
    const selectItem = (item) => {
        setSelectedItem(item)
        setDropDownActive(false)
    }
    return (
        <Styles>
            <div className='mt-6 w-full '>
                <p className={`text-lg label ${labelCenter ? "text-center w-full" : ""}`}>{label}</p>
                <div className='w-full relative'>
                    <div className='input-field flex justify-between p-[16px]'>
                        <p className='w-full'>{selectedItem.name}</p>
                        <img src={DropdownArrow} onClick={() => setDropDownActive(!dropDownActive)} />
                    </div>
                    {dropDownActive && list.length > 0 && (
                        <div className='w-full absolute top-[66px] z-50 px-4 input-field bg-[#fff]'>
                            {list.map((item, index) => (
                                <p key={index} className='border-b py-4 cursor-pointer' onClick={() => selectItem(item)}>
                                    {item.name}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </Styles>
    )
}

export default Dropdown

const Styles = styled.div`
    width: 100%;
    .input-field{
        border-radius: 8px;
        border: 1px solid #D9D9D9;
        background: #ffffff;
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

Dropdown.propTypes = {
    label: PropTypes?.string?.isRequired,
    placeholder: PropTypes?.string,
    value: PropTypes?.string,
    onChange: PropTypes?.func?.isRequired,
    labelCenter: PropTypes?.bool,
    list: PropTypes?.any,
};