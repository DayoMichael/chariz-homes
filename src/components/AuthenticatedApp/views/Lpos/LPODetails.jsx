import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';

import Layout from '../../components/Layout/Layout';

import NavArrowIcon from '../../../../assets/icons/nav-arrow-icon.svg';
import PlaceholderImage from '../../../../assets/icons/placeholder-image-icon.svg';
import RiskScoreImage from '../../../../assets/icons/risk-score-image.svg';
import FundingRemainingStroke from '../../../../assets/icons/funding-remaining-stroke.svg';
import AvailableInvestmentStroke from '../../../../assets/icons/available-investments-stroke.svg';
import TotalFundsRequestedStroke from '../../../../assets/icons/total-funds-requested-stroke.svg';
import PieChart from '../../../../assets/icons/pie-chart.svg'
import SmallCancelIcon from '../../../../assets/icons/small-cancel-icon.svg';
import SuccessIcon from '../../../../assets/icons/success-icon.svg';
import PhoneIcon from '../../../../assets/icons/phone-icon.svg';
import MailIcon from '../../../../assets/icons/mail-icon.svg';
import LocationIcon from '../../../../assets/icons/location-icon.svg';
import LargeProfileImage from '../../../../assets/icons/large-profile-image.svg';

import Button from '../../../../library/Button/Button';
import Modal from '../../../../library/Modal/Modal';
import { useNavigate } from 'react-router-dom';

function LPODetails() {
    const navigate = useNavigate()
    const [view, setView] = useState("overview");
    const [showInvest, setShowInvest] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    const submitRequest = () => {
        setShowInvest(false)
        setShowSuccessModal(true)
    }

    const goToDashboardPage = () => {
        navigate("/dashboard")
    }
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
                                    onClick={() => setShowInvest(true)}
                                    text={"Invest "}
                                    className="w-full !p-3"
                                />
                            </div>
                        </div>

                        <div className='flex flex-col mt-6 border-t border-[#D9D9D9] w-full'>
                            <div className='max-w-[672px] m-auto mt-10 w-full'>
                                <div className='w-full rounded-lg bg-[#F3F5F7] flex p-1'>
                                    <div className={`w-[50%] text-base font-semibold rounded-lg flex justify-center p-3 cursor-pointer ${view === "overview" ? "bg-[#fff] text-[#000]" : "text-[#7D828D]"} `} onClick={() => setView("overview")}>Overview</div>
                                    <div className={`w-[50%] text-base font-semibold rounded-lg flex justify-center p-3 cursor-pointer ${view === "borrower" ? "bg-[#fff] text-[#000]" : "text-[#7D828D]"} `} onClick={() => setView("borrower")}>Borrower</div>
                                </div>

                                {view === "overview" && <div className='mt-8 gap-4 flex flex-col'>
                                    <div className='border border-[#D9D9D9] p-4 md:p-10 rounded-lg'>
                                        <div className='flex flex-col md:flex-row justify-between'>
                                            <div className=' flex flex-col justify-between'>
                                                <p className='text-sm font-semibold text-[#7D828D]'>LPO000056789</p>
                                                <h4 className='text-[#119B38] text-xl font-semibold mt-4 flex'>NGN 5,000,000,000</h4>
                                            </div>
                                            <div className='flex md:items-end flex-col mt-4 md:mt-0'>
                                                <img src={RiskScoreImage} className="w-[50px]" />
                                                <p className='text-sm font-semibold text-[#7D828D]'>Total Risk Score</p>
                                            </div>

                                        </div>
                                        <div className='flex justify-between mt-6'>
                                            <div className=' flex flex-col justify-between'>
                                                <p className='text-xs font-medium text-[#7D828D]'>Borrower Cost</p>
                                                <h4 className='text-[#000] text-sm font-semibold mt-1 justify-end flex'>NGN 2,909,589.00</h4>
                                            </div>
                                            <div className=' flex flex-col justify-between'>
                                                <p className='text-xs font-medium text-[#7D828D] text-end'>Borrower Invested</p>
                                                <h4 className='text-[#000] text-sm font-semibold mt-1 justify-end flex'>NGN 3,000,000,000</h4>
                                            </div>

                                        </div>
                                        <div className='flex justify-between mt-6'>
                                            <div className=' flex flex-col justify-between'>
                                                <p className='text-xs font-medium text-[#7D828D]'>Total Invested</p>
                                                <h4 className='text-[#000] text-sm font-semibold mt-1 justify-end flex'>NGN 5,000,000.500</h4>
                                            </div>
                                            <div className=' flex flex-col justify-between'>
                                                <p className='text-xs font-medium text-[#7D828D] text-end'>Investors</p>
                                                <h4 className='text-[#000] text-sm font-semibold mt-1 justify-end flex'>40</h4>
                                            </div>

                                        </div>

                                    </div>
                                    <div className='border border-[#D9D9D9] p-4 md:p-10 rounded-lg'>
                                        <div className='w-full flex flex-col md:flex-row gap-4 md:gap-0'>
                                            <div className='w-full md:w-[50%] md:border-r md:border-[#D9D9D9] gap-6 flex flex-col'>
                                                <div className='flex '>
                                                    <img src={FundingRemainingStroke} className="mr-4" />
                                                    <div className='flex flex-col gap-1'>
                                                        <p className='text-sm text-[#7D828D] font-medium'>Funding Remaining</p>
                                                        <h4 className='text-2xl text-[#1C51D7] font-semibold'>40%</h4>
                                                        <p className='text-xs text-[#000] font-semibold'>NGN 2,909,589.00</p>
                                                    </div>

                                                </div>

                                                <div className='flex '>
                                                    <img src={AvailableInvestmentStroke} className="mr-4" />
                                                    <div className='flex flex-col gap-1'>
                                                        <p className='text-sm text-[#7D828D] font-medium'>Available for Investment</p>
                                                        <h4 className='text-2xl text-[#1C51D7] font-semibold'>30%</h4>
                                                        <p className='text-xs text-[#000] font-semibold'>NGN 2,909,589.00</p>
                                                    </div>

                                                </div>
                                                <div className='flex '>
                                                    <img src={TotalFundsRequestedStroke} className="mr-4" />
                                                    <div className='flex flex-col gap-1'>
                                                        <p className='text-sm text-[#7D828D] font-medium'>Available for Investment</p>
                                                        <p className='text-xs text-[#000] font-semibold'>NGN 2,909,589.00</p>
                                                    </div>

                                                </div>

                                            </div>

                                            <div className='w-full md:w-[50%] flex justify-center items-center'>
                                                <img src={PieChart} />
                                            </div>


                                        </div>


                                    </div>
                                    <Button
                                        onClick={() => setShowInvest(true)}
                                        text='Invest'
                                    />

                                </div>}
                                {view === "borrower" &&
                                    <div className='mt-8 gap-4 flex flex-col'>
                                        <div className='border border-[#D9D9D9] rounded-lg'>
                                            <div className='bg-[#F9F9F9] rounded-tr-lg rounded-tl-lg h-[108px]'>
                                            </div>
                                            <div className='bg-[#fff] rounded-br-lg rounded-bl-lg p-4 md:p-10 gap-4 flex flex-col relative'>
                                                <div className='absolute -top-10'>
                                                    <img src={LargeProfileImage}/>
                                                </div>
                                                <h4 className='text-2xl font-semibold text-[#0E172E] mt-20'>Akingbolade Shada Taiwo</h4>
                                                <div className='flex flex-col md:flex-row mt-2 gap-4'>
                                                    <p className='text-sm text-[#7D828D] font-medium flex items-center'><img src={PhoneIcon} className="mr-1" />08037148337</p>
                                                    <p className='text-sm text-[#7D828D] font-medium flex items-center'><img src={MailIcon} className="mr-1" /> a.shadat@mybristol.co.uk</p>
                                                </div>
                                                <p className='text-sm text-[#7D828D] font-medium flex items-center'><img src={LocationIcon} className="mr-1" />Ifako-Ijaye, Lagos, Nigeria</p>
                                            </div>
                                        </div>
                                        <div className='border border-[#D9D9D9] rounded-lg p-4 md:p-10 flex flex-col gap-6'>
                                            <h4 className='text-base font-semibold text-[#0E172E]'>Company Information </h4>

                                            <div className='flex flex-col gap-1'>
                                                <p className='text-sm text-[#7D828D] font-medium'>Company Name</p>
                                                <p className='text-sm text-[#0E172E] font-semibold'>Sallysoft International</p>
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <p className='text-sm text-[#7D828D] font-medium'>Registration Number</p>
                                                <p className='text-sm text-[#0E172E] font-semibold'>3434553466</p>
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <p className='text-sm text-[#7D828D] font-medium'>Date Registered with Issuer </p>
                                                <p className='text-sm text-[#0E172E] font-semibold'>10th Jan 2023</p>
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <p className='text-sm text-[#7D828D] font-medium'>Date Created </p>
                                                <p className='text-sm text-[#0E172E] font-semibold'>2nd Aug 2023</p>
                                            </div>
                                        </div>
                                        <Button
                                            onClick={() => setShowInvest(true)}
                                            text='Invest'
                                        />
                                    </div>
                                }

                            </div>

                        </div>
                    </div>
                </div>
                {showInvest && <Modal>
                    <div className='flex flex-col'>
                        <div className='py-4 px-6 flex justify-between'>
                            <p className='text-lg font-semibold'>Invest</p>
                            <img src={SmallCancelIcon} className="cursor-pointer" onClick={() => setShowInvest(false)} />
                        </div>
                        <div className='bg-[#F1F4F6] py-4 px-6 py-8 px-10 rounded-lg'>
                            <p className='text-base font-medium text-[#0E172E]'>Enter invest amount</p>
                            <p className='text-sm font-medium text-[#0E172E] mt-4'>Amount (N)</p>
                            <div className='search-input mt-2'>
                                <input
                                    placeholder='0.0'
                                />
                            </div>
                            <div className='bg-[#fff] p-4 mt-2 rounded-lg'>
                                <div className='flex justify-between'>
                                    <div className=' flex flex-col justify-start gap-1'>
                                        <p className='text-sm text-[#7D828D] font-medium '>Min Amount</p>
                                        <p className='text-xs text-[#0E172E] font-semibold'>NGN 2,909,589.00</p>
                                    </div>
                                    <div className=' flex flex-col justify-end gap-1'>
                                        <p className='text-sm text-[#7D828D] font-medium text-right'>Max Amount</p>
                                        <p className='text-xs text-[#0E172E] font-semibold text-right'>NGN 2,909,589.00</p>
                                    </div>
                                </div>
                            </div>
                            <Button
                                className={"mt-4"}
                                text={"Invest"}
                                onClick={submitRequest}
                            />

                        </div>

                    </div>

                </Modal>}
                {showSuccessModal && <Modal>
                    <div className='flex flex-col p-10 justify-center items-center'>
                        <img src={SuccessIcon} className="w-[100px] h-[100px]" />
                        <p className='text-base mt-6 font-bold text-center'>Investment Successful</p>
                        <p className='text-sm text-[#7A7878] text-center mt-2'>You will receive an email shortly</p>
                        <div className='mt-10 w-full'>
                            <Button
                                text={"Done"}
                                onClick={goToDashboardPage}
                            />
                        </div>

                    </div>
                </Modal>
                }
            </Layout>

        </Styled>
    )
}

export default LPODetails

const Styled = styled.div`
    .search-input {
        width: 100%;
        padding: 13px;
        border-radius: 8px;
        background: #fff;
        border: 1px solid #D9D9D9;
        color: #000;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        >input {
            background: #fff;
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