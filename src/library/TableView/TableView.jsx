import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import PlaceholderImage from "../../assets/images/placeholder-image.svg";

function TableView({ onClick, list }) {
    return (
        <Styled className='pb-2 md:pb-5 pt-2 md:pt-5 px-2 md:px-8 mt-6 cursor-pointer' >
            {list.map((item, index) => (
                <div className='w-full py-5 flex border-b border-slate-700' key={index} onClick={() => onClick(item)}>
                    <div className='w-10 h-10 rounded-full mr-2'>
                        <img
                            src={PlaceholderImage}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-sm font-semibold text-white'>{item?.firstname} {item?.lastname}</h3>
                        <div className='flex'><span className='text-[#979797] mr-1'>Last bought on:</span> <span className='text-[#E26A6A] mr-1'>Last 2 Years</span></div>
                    </div>
                </div>
            ))}
        </Styled>
    )
}

export default TableView

const Styled = styled.div`
    border-radius: 10px;
    background: #203035;
`

TableView.propTypes = {
    list: PropTypes?.array,
    value: PropTypes?.string,
    onClick: PropTypes?.func?.isRequired,
    name: PropTypes?.string,
};