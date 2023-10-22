import React from 'react';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';

function TabButton({ view, firstTabName, secondTabName, setView }) {
    return (
        <Styles>
            <div className='tab w-full my-8 flex bg-[#202F36]'>
                <div className={`${view === firstTabName ? "text-black bg-green" : "text-white "} flex justify-center items-center tab-item w-1/2 cursor-pointer`} onClick={() => setView(firstTabName)}>{firstTabName}</div>
                <div className={`${view === secondTabName ? "text-black bg-green" : "text-white "} flex justify-center items-center tab-item w-1/2 cursor-pointer`} onClick={() => setView(secondTabName)}>{secondTabName}</div>
            </div>
        </Styles>
    )
}

export default TabButton

TabButton.propTypes = {
    view: PropTypes?.string,
    firstTabName: PropTypes?.string,
    secondTabName: PropTypes?.string,
    setView: PropTypes?.func
}

const Styles = styled.div`
    .tab {
        border-radius: 50px;
        border: 1px solid #414E54;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        background: #202F36;
        border-radius: 30px;
    }
    .tab-item {
        padding: 16px;
        border-radius: 30px;
        border-radius: 30px;
    }
`