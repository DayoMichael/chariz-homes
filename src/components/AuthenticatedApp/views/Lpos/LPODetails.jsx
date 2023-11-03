import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import Layout from '../../components/Layout/Layout';
import NavArrowIcon from '../../../../assets/icons/nav-arrow-icon.svg';
import PlaceholderImage from '../../../../assets/icons/placeholder-image-icon.svg';
import TotalValueIcon from '../../../../assets/icons/total-value-icon.svg';
import TotalProfitIcon from '../../../../assets/icons/total-profit-icon.svg';
import TotalInvestmentsIcon from '../../../../assets/icons/total-investment-icon.svg';
import LPOTable from '../../../../library/Table/LPOTable';
import SearchIcon from '../../../../assets/icons/search-icon.svg';
import DropDownArrow from '../../../../assets/icons/dropdown-arrow.svg';
import FiltersIcon from '../../../../assets/icons/filters-icon.svg';
import GridViewIcon from '../../../../assets/icons/grid-view-icon.svg';
import ListViewIcon from '../../../../assets/icons/list-view-icon.svg';
import GridViewActiveIcon from '../../../../assets/icons/grid-view-active-icon.svg';
import ListViewActiveIcon from '../../../../assets/icons/list-view-active-icon.svg';

import Button from '../../../../library/Button/Button';

function LPODetails() {
const [view, setView] = useState("overview")


    return (
        <Styled>
            <Layout>
                <div className='w-full h-screen flex flex-col gap-4'>
                    <div className='w-full px-8 py-5 flex justify-between rounded-lg bg-[#ffff]'>
                        <div className='flex gap-1 items-center'>
                            <p className='text-xs color-black'>Home</p> <img src={NavArrowIcon} /> <p className='text-xs text-[#000]'>Dashboard</p> <img src={NavArrowIcon} /> <p className='text-xs text-[#000]'>LPOs</p> <img src={NavArrowIcon} /> <p className='text-xs text-[#7A7878]'>LPO Details</p>
                        </div>

                        <div className='flex justify-center items-center'>
                            <img src={PlaceholderImage} />
                        </div>

                    </div>
                    <div className='flex flex-col rounded-lg bg-[#fff] h-full p-6 mb-2 overflow-y-scroll'>
                        <div className='flex flex-col md:flex-row justify-between gap-4'>
                            <div>
                                <h4 className='font-bold text-2xl'>
                                    LPOs
                                </h4>
                                <p className='text-xs text-[#7A7878] mt-2'>List of all LPOs available for investment </p>
                            </div>
                            <div className='w-[125px]'>
                                <Button
                                    text={"Invest "}
                                    className="w-full !p-3"
                                />
                            </div>
                        </div>

                        <div className='flex flex-col mt-6 border-t border-[#D9D9D9] w-full'>
                            <div className='max-w-[672px] m-auto mt-10 w-full'>
                                <div className='w-full rounded-lg bg-[#F3F5F7] flex p-1'>
                                    <div className={`w-[50%] text-base font-semibold rounded-lg flex justify-center p-3 cursor-pointer ${view === "overview" ? "bg-[#fff] text-[#000]" : "text-[#7D828D]"} `} onClick={()=> setView("overview")}>Overview</div>
                                    <div className={`w-[50%] text-base font-semibold rounded-lg flex justify-center p-3 cursor-pointer ${view === "borrower" ? "bg-[#fff] text-[#000]" : "text-[#7D828D]"} `} onClick={()=> setView("borrower")}>Borrower</div>
                                </div>

                                <div className='mt-8'>
                                    <div className='border border-[#D9D9D9] p-10'>

                                    </div>

                                </div>

                            </div>

                        </div>






                    </div>

                </div>

            </Layout>

        </Styled>
    )
}

export default LPODetails

const Styled = styled.div`
    .search-input {
        width: 298px;
        padding: 10px;
        border-radius: 8px;
        background: #F1F4F6;
        color: #7A7878;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        >input {
            background: #F1F4F6;
        }
    }
    .per-page-dropdown-btn {
        padding: 8px;
        border-radius: 8px;
        background: #F1F4F6;
        color: #0E172E;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    .page-dropdown {
        padding: 8px;
        border-radius: 8px;
        background: #F1F4F6;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
    }
    .view-toggle {
        border-radius: 8px;
        background: #F1F4F6;
        padding: 4px;
    }
    .active {
        background-color: #ffff;
        border-radius: 8px;
    }
`