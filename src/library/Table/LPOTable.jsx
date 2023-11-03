import React from 'react';
import { styled } from 'styled-components';

function LPOTable() {
    return (
        <Styled className='w-full border-[#D9D9D9] overflow-x-scroll px-2'>
            <div className='w-full flex px-4 border-[#D9D9D9] border-y py-2 gap-4 min-w-[1397px]'>
                <div className='w-[20px] title justify-end flex'>
                    #
                </div>
                <div className='w-3/12 title justify-end flex'>
                    LPOID
                </div>
                <div className='w-5/12 title justify-end flex'>
                    LPO Value
                </div>
                <div className='w-3/12 title justify-end flex'>
                    Borrower Cost
                </div>
                <div className='w-3/12 title justify-end flex'>
                    Borrower’s Investment
                </div>
                <div className='w-3/12 title justify-end flex'>
                    Amount Invested
                </div>
                <div className='w-3/12 title justify-end flex'>
                    Investment Required
                </div>
                <div className='w-3/12 title justify-end flex'>
                    ROI
                </div>
                <div className='w-3/12 title justify-end flex'>
                    Due Date
                </div>

            </div>
            <div className='w-full flex px-4 border-[#D9D9D9] border-b py-6 gap-4 min-w-[1397px] details cursor-pointer hover:bg-[#F3F5F7]'>
                <div className='w-[20px]  justify-end flex'>
                    1
                </div>
                <div className='w-3/12  justify-end flex whitespace-nowrap'>
                    LPO000056789
                </div>
                <div className='w-5/12  justify-end flex whitespace-nowrap !text-[#119B38]'>
                    NGN 5,000,000,000,000,000
                </div>
                <div className='w-3/12  justify-end flex whitespace-nowrap'>
                    NGN 2,909,589.00
                </div>
                <div className='w-3/12  justify-end flex whitespace-nowrap'>
                    NGN 5,000,000.500
                </div>
                <div className='w-3/12  justify-end flex whitespace-nowrap'>
                    NGN 3,000,000,000
                </div>
                <div className='w-3/12  justify-end flex whitespace-nowrap'>
                    NGN 3,000,000,000
                </div>
                <div className='w-3/12  justify-end flex whitespace-nowrap'>
                    NGN 40,000
                </div>
                <div className='w-3/12 justify-end flex whitespace-nowrap'>
                    2nd Aug 2023
                </div>

            </div>
            <div className='w-full flex px-4 border-[#D9D9D9] border-b py-6 gap-4 min-w-[1397px] details cursor-pointer hover:bg-[#F3F5F7]'>
                <div className='w-[20px]  justify-end flex'>
                    2
                </div>
                <div className='w-3/12  justify-end flex whitespace-nowrap'>
                    LPO000056789
                </div>
                <div className='w-5/12  justify-end flex whitespace-nowrap !text-[#119B38]'>
                    NGN 5,000,000,000,000,000
                </div>
                <div className='w-3/12  justify-end flex whitespace-nowrap'>
                    NGN 2,909,589.00
                </div>
                <div className='w-3/12  justify-end flex whitespace-nowrap'>
                    NGN 5,000,000.500
                </div>
                <div className='w-3/12  justify-end flex whitespace-nowrap'>
                    NGN 3,000,000,000
                </div>
                <div className='w-3/12  justify-end flex whitespace-nowrap'>
                    NGN 3,000,000,000
                </div>
                <div className='w-3/12  justify-end flex whitespace-nowrap'>
                    NGN 40,000
                </div>
                <div className='w-3/12 justify-end flex whitespace-nowrap'>
                    2nd Aug 2023
                </div>

            </div>

        </Styled>
    )
}

export default LPOTable

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