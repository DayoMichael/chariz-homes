import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

import SearchIcon from "../../assets/icons/input-search-icon.svg";

function SearchInput({placeholder, value, onChange}) {
  return (
    <Styled className='w-full flex mt-2'>
        <img 
            src={SearchIcon}
            className="mr-2"
        />
        <input
            className='bg-[#0E1A20] w-full'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </Styled>
  )
}

export default SearchInput

SearchInput.propTypes = {
    placeholder: PropTypes?.string,
    value: PropTypes?.string,
    onChange: PropTypes?.func?.isRequired,
};

const Styled = styled.div`
    padding: 15px;
    border-radius: 4px;
    background: #0E1A20;
    color: #71797D;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`