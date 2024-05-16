import React from 'react';
import { styled } from 'styled-components';
import SelectedIcon from '../../assets/la-icons/selected-icon.svg';
import UnSelectedIcon from '../../assets/la-icons/unselected-icon.svg'

function Select({icon, text, selected, onClick}) {
  return (
    <Styled className={`w-fit border-2 border-[#F29254] p-2 rounded-full gap-2 flex justify-between cursor-pointer items-center ${selected ? "bg-[#F29254] text-[#fff]" : "text-[#000] bg-[#fff]"}`} onClick={onClick}>
        <div className='flex gap-1 items-center'>
            <div className={`w-[37px] h-[37px] rounded-full ${selected ? "bg-[#fff]" : "bg-[#ECECEC]"} flex justify-center items-center`}>
                <img src={icon}/>
            </div>
            
            <p>{text}</p>
        </div>
        <img src={selected ? SelectedIcon : UnSelectedIcon}/>

    </Styled>
  )
}

export default Select;

const Styled = styled.div`
    

`