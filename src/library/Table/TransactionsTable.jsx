import React from 'react';
import { styled } from 'styled-components';
import UpwardTrendIcon from '../../assets/icons/upward-trend-icon.svg';

function TransactionsTable() {
    return (
        <Styled className='w-full border-[#D9D9D9] overflow-x-scroll px-2 '>
            <div className='flex flex-col min-w-[1214px]'>


                <div className='w-full flex px-4 border-[#D9D9D9] border-y py-2 gap-4 '>
                    <div className='w-[20px] title justify-end flex'>
                        #
                    </div>
                    <div className='w-2/12 title justify-end flex'>
                        LPO Number
                    </div>
                    <div className='w-4/12 title justify-end flex'>
                        Value
                    </div>
                    <div className='w-3/12 title justify-end flex'>
                        Borrower Cost
                    </div>
                    <div className='w-3/12 title justify-end flex'>
                        Borrower Invested
                    </div>

                    <div className='w-3/12 title justify-end flex'>
                        ROI
                    </div>
                    <div className='w-3/12 title justify-end flex'>
                        Last 7days
                    </div>

                </div>
                <div className='w-full flex px-4 border-[#D9D9D9] border-b py-6 gap-4 details cursor-pointer hover:bg-[#F3F5F7]'>
                    <div className='w-[20px]  justify-end flex'>
                        1
                    </div>
                    <div className='w-2/12  justify-end flex whitespace-nowrap'>
                        LPO000056789
                    </div>
                    <div className='w-4/12  justify-end flex whitespace-nowrap !text-[#119B38]'>
                        NGN 5,000,000.500
                    </div>
                    <div className='w-3/12  justify-end flex whitespace-nowrap'>
                        NGN 2,909,589.00
                    </div>
                    <div className='w-3/12  justify-end flex whitespace-nowrap'>
                        NGN 5,000,000.500
                    </div>


                    <div className='w-3/12  justify-end flex whitespace-nowrap'>
                        NGN 40,000
                    </div>
                    <div className='w-3/12 justify-end flex whitespace-nowrap  !text-[#119B38]'>
                     <img src={UpwardTrendIcon} className={"mr-2"}/>  +5.7%
                    </div>

                </div>
                <div className='w-full flex px-4 border-[#D9D9D9] border-b py-6 gap-4 details cursor-pointer hover:bg-[#F3F5F7]'>
                    <div className='w-[20px]  justify-end flex'>
                        1
                    </div>
                    <div className='w-2/12  justify-end flex whitespace-nowrap'>
                        LPO000056789
                    </div>
                    <div className='w-4/12  justify-end flex whitespace-nowrap !text-[#119B38]'>
                        NGN 5,000,000.500
                    </div>
                    <div className='w-3/12  justify-end flex whitespace-nowrap'>
                        NGN 2,909,589.00
                    </div>
                    <div className='w-3/12  justify-end flex whitespace-nowrap'>
                        NGN 5,000,000.500
                    </div>


                    <div className='w-3/12  justify-end flex whitespace-nowrap'>
                        NGN 40,000
                    </div>
                    <div className='w-3/12 justify-end flex whitespace-nowrap  !text-[#119B38]'>
                       <img src={UpwardTrendIcon} className={"mr-2"}/> +5.7%
                    </div>

                </div>
            </div>

        </Styled>
    )
}

export default TransactionsTable

const Styled = styled.div`
    .title {
        color: #7D828D;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    .details {
        color: #0E172E;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`