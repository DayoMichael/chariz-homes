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

function LPOs() {
    const [itemsPerPage, setItemsPerPage] = useState(100);
    const [showPerPageDropdown, setShowPerPageDropdown] = useState(false);
    const [view, setView] = useState("list");

    const DashboardItems = [
        {
            icon: TotalValueIcon,
            heading: "NGN 5,000,000,000,000",
            subheading: "Total Value of Investments",
        },
        {
            icon: TotalProfitIcon,
            heading: "NGN 504,000",
            subheading: "Total Profit",
        },
        {
            icon: TotalInvestmentsIcon,
            heading: "20",
            subheading: "Total Number of Investments",
        },
    ]
    const perPageItem = [100, 50, 20, 10]

    const selectPerPageDowdown = (item) => {
        setItemsPerPage(item)
        setShowPerPageDropdown(false)
    }
    return (
        <Styled>
            <Layout>
                <div className='w-full h-screen flex flex-col gap-4'>
                    <div className='w-full px-8 py-5 flex justify-between rounded-lg bg-[#ffff]'>
                        <div className='flex gap-1 items-center'>
                            <p className='text-xs color-black'>Home</p> <img src={NavArrowIcon} /> <p className='text-xs text-[#7A7878]'>Dashboard</p>
                        </div>

                        <div className='flex justify-center items-center'>
                            <img src={PlaceholderImage} />
                        </div>

                    </div>
                    <div className='flex flex-col rounded-lg bg-[#fff] h-full p-6 mb-2 overflow-y-scroll'>
                        <h4 className='font-bold text-2xl'>
                            LPOs
                        </h4>
                        <p className='text-xs text-[#7A7878] mt-2'>List of all LPOs available for investment </p>
                        <div className='flex flex-col mt-6'>
                            <div className='flex flex-col md:flex-row gap-2 justify-between'>
                                <div className='search-input flex'>
                                    <img src={SearchIcon} className="mr-2" />
                                    <input
                                        className=''
                                        placeholder='Search List'
                                    />
                                </div>
                                <div className='flex items-center '>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-xs mr-2'>Items per page</p>
                                        <div className='per-page-dropdown relative'>
                                            <div className='per-page-dropdown-btn flex items-center cursor-pointer'>
                                                {itemsPerPage}  <img src={DropDownArrow} onClick={() => setShowPerPageDropdown(!showPerPageDropdown)} />
                                            </div>
                                            {showPerPageDropdown &&
                                                <div className='per-page-dropdown-btn absolute top-14 w-full cursor-pointer'>
                                                    {perPageItem.map((item, index) => (
                                                        <div key={index} className='border-b border-[#000] p-2 ' onClick={() => selectPerPageDowdown(item)}>
                                                            {item}
                                                        </div>))
                                                    }

                                                </div>}

                                        </div>
                                        <div className='per-page-dropdown relative'>
                                            <div className='per-page-dropdown-btn flex items-center cursor-pointer'>
                                                <img src={FiltersIcon} className="mr-2 fill-black" /> Filters
                                            </div>
                                        </div>
                                        <div className='view-toggle flex'>
                                            <div className={`px-[8px] py-[4px] cursor-pointer ${view === "list" ? "active" : ""}`} onClick={() => setView("list")}>
                                                <img src={view === "list" ? ListViewActiveIcon : ListViewIcon} />
                                            </div>
                                            <div className={`px-[8px] py-[4px] cursor-pointer ${view === "grid" ? "active" : ""}`} onClick={() => setView("grid")}>
                                                <img src={view === "grid" ? GridViewActiveIcon : GridViewIcon} />
                                            </div>

                                        </div>

                                    </div>

                                </div>


                            </div>
                            {view === "list" &&
                                <div className='w-full mt-4'>
                                    <LPOTable
                                    />
                                </div>
                            }
                            {view === "grid" &&
                                <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4 border-t border-[#D9D9D9] gap-4'>
                                    <div className='p-6 flex-col flex col-span-1 rounded-lg border border-[#D9D9D9] mt-4'>
                                        <div className='flex justify-between'>
                                            <p className='text-[#7D828D] text-sm font-semibold'>LPO000056789</p>
                                            <p className='text-[#119B38] text-sm font-semibold'>+5.7%</p>
                                        </div>
                                        <h4 className='text-[#119B38] text-xl font-semibold mt-5'>
                                            NGN 5,000,000,000,000,000
                                        </h4>
                                        <div className='flex justify-between text-sm text-[#0E172E] font-semibold mt-8'>
                                            <p>
                                                NGN 2,909,589.00
                                            </p>
                                            <p>
                                                NGN 3,000,000,000
                                            </p>
                                        </div>
                                        <div className='flex justify-between text-sm text-[#7D828D] font-medium mt-2'>
                                            <p>
                                                Borrower Cost
                                            </p>
                                            <p>
                                                Borrower Invested
                                            </p>
                                        </div>
                                        <div className='flex justify-between text-sm text-[#0E172E] font-semibold mt-8'>
                                            <p>
                                                NGN 5,000,000.500
                                            </p>
                                            <p>
                                                40
                                            </p>
                                        </div>
                                        <div className='flex justify-between text-sm text-[#7D828D] font-medium mt-2'>
                                            <p>
                                                Total Invested
                                            </p>
                                            <p>
                                                Investors
                                            </p>
                                        </div>
                                        <div className='w-full mt-6'>
                                            <Button
                                                text={"Invest"}
                                                type="inverted"
                                                className={"border border-[#000] !p-3"}
                                            />
                                        </div>
                                    </div>
                                    <div className='p-6 flex-col flex col-span-1 rounded-lg border border-[#D9D9D9] mt-4'>
                                        <div className='flex justify-between'>
                                            <p className='text-[#7D828D] text-sm font-semibold'>LPO000056789</p>
                                            <p className='text-[#119B38] text-sm font-semibold'>+5.7%</p>
                                        </div>
                                        <h4 className='text-[#119B38] text-xl font-semibold mt-5'>
                                            NGN 5,000,000,000,000,000
                                        </h4>
                                        <div className='flex justify-between text-sm text-[#0E172E] font-semibold mt-8'>
                                            <p>
                                                NGN 2,909,589.00
                                            </p>
                                            <p>
                                                NGN 3,000,000,000
                                            </p>
                                        </div>
                                        <div className='flex justify-between text-sm text-[#7D828D] font-medium mt-2'>
                                            <p>
                                                Borrower Cost
                                            </p>
                                            <p>
                                                Borrower Invested
                                            </p>
                                        </div>
                                        <div className='flex justify-between text-sm text-[#0E172E] font-semibold mt-8'>
                                            <p>
                                                NGN 5,000,000.500
                                            </p>
                                            <p>
                                                40
                                            </p>
                                        </div>
                                        <div className='flex justify-between text-sm text-[#7D828D] font-medium mt-2'>
                                            <p>
                                                Total Invested
                                            </p>
                                            <p>
                                                Investors
                                            </p>
                                        </div>
                                        <div className='w-full mt-6'>
                                            <Button
                                                text={"Invest"}
                                                type="inverted"
                                                className={"border border-[#000] !p-3"}
                                            />
                                        </div>
                                    </div>
                                    <div className='p-6 flex-col flex col-span-1 rounded-lg border border-[#D9D9D9] mt-4'>
                                        <div className='flex justify-between'>
                                            <p className='text-[#7D828D] text-sm font-semibold'>LPO000056789</p>
                                            <p className='text-[#119B38] text-sm font-semibold'>+5.7%</p>
                                        </div>
                                        <h4 className='text-[#119B38] text-xl font-semibold mt-5'>
                                            NGN 5,000,000,000,000,000
                                        </h4>
                                        <div className='flex justify-between text-sm text-[#0E172E] font-semibold mt-8'>
                                            <p>
                                                NGN 2,909,589.00
                                            </p>
                                            <p>
                                                NGN 3,000,000,000
                                            </p>
                                        </div>
                                        <div className='flex justify-between text-sm text-[#7D828D] font-medium mt-2'>
                                            <p>
                                                Borrower Cost
                                            </p>
                                            <p>
                                                Borrower Invested
                                            </p>
                                        </div>
                                        <div className='flex justify-between text-sm text-[#0E172E] font-semibold mt-8'>
                                            <p>
                                                NGN 5,000,000.500
                                            </p>
                                            <p>
                                                40
                                            </p>
                                        </div>
                                        <div className='flex justify-between text-sm text-[#7D828D] font-medium mt-2'>
                                            <p>
                                                Total Invested
                                            </p>
                                            <p>
                                                Investors
                                            </p>
                                        </div>
                                        <div className='w-full mt-6'>
                                            <Button
                                                text={"Invest"}
                                                type="inverted"
                                                className={"border border-[#000] !p-3"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>






                    </div>

                </div>

            </Layout>

        </Styled>
    )
}

export default LPOs

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