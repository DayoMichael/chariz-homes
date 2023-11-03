import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Layout from '../components/Layout/Layout';
import NavArrowIcon from '../../../assets/icons/nav-arrow-icon.svg';
import PlaceholderImage from '../../../assets/icons/placeholder-image-icon.svg';
import DashboardCard from '../../../library/DashboardCard/DashboardCard';
import TotalValueIcon from '../../../assets/icons/total-value-icon.svg';
import TotalProfitIcon from '../../../assets/icons/total-profit-icon.svg';
import TotalInvestmentsIcon from '../../../assets/icons/total-investment-icon.svg';
import LPOTable from '../../../library/Table/LPOTable';
import TransactionsTable from '../../../library/Table/TransactionsTable';


function Dashboard() {
    const navigate = useNavigate();

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
    const goToLPOsView = () => {
        navigate("/dashboard/lpos")
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
                            Dashboard
                        </h4>
                        <p className='text-xs text-[#7A7878] mt-2'>Overview of all your investments</p>

                        <div className='flex gap-4 mt-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                            {DashboardItems.map((item, index) => (
                                <DashboardCard
                                    key={index}
                                    {...item}
                                />
                            ))}

                        </div>

                        <div className='mt-8 rounded-lg border border-[#D9D9D9] w-full h-fit'>
                            <div className='w-full p-6 flex justify-between '>
                                <h4 className='text-xl font-semibold'>Live LPOs</h4>
                                <p className='text-sm font-medium cursor-pointer flex items-end' onClick={goToLPOsView}>See all</p>

                            </div>
                            <LPOTable
                            />
                        </div>
                        <div className='mt-8 rounded-lg border border-[#D9D9D9] w-full h-fit'>
                            <div className='w-full p-6 flex justify-between '>
                                <h4 className='text-xl font-semibold'>Latest Transactions</h4>
                                <p className='text-sm font-medium cursor-pointer flex items-end'>See all</p>

                            </div>
                            <TransactionsTable
                            />
                        </div>

                    </div>

                </div>

            </Layout>

        </Styled>
    )
}

export default Dashboard

const Styled = styled.div`
    
`