import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import BackIcon from "../../assets/la-icons/back-icon.svg";
import Button from '../../library/Button/Button';
import { ChartView } from '../../library/Charts/Chart';
import DotIcon from '../../assets/la-icons/dot-icon.svg';
import Footer from '../Footer';


function Analytics() {
    const navigate = useNavigate()
    const [view, setView] = useState({ id: 1, name: 'Earnings', value: "N1,000,000" },)

    const views = [
        { id: 1, name: 'Earnings', value: "N1,000,000" },
        { id: 2, name: 'Bookings', value: "53" },
        { id: 3, name: 'Ratings', value: "123" },
        { id: 4, name: 'Reviews', value: "100" },
        { id: 5, name: 'Click Rate', value: '90%' }
    ]
    return (
        <Styled>
            <div className='bg-[#ECECEC] mt-20 min-h-screen'>
                <div className='flex flex-col w-full max-w-[90%] m-auto py-20 h-full'>
                    <div className='flex justify-between'>
                        <img src={BackIcon} className="cursor-pointer w-[50px] md:w-[70px]" alt="Back" onClick={() => navigate("/")} />
                        <h2 className='text-4xl font-bold items-center text-center flex'>Dashboard Overview</h2>
                        <div className='gap-6 opacity-0 border border-[#F29254] px-6 py-2 items-center justify-center bg-[#fff] rounded-full h-fit'></div>
                    </div>
                    <div className='mt-10'>
                        <div className='p-2 w-full bg-[#fff] rounded-full flex gap-2'>
                            {views.map(item => (
                                <Button
                                    key={item.name}
                                    type={view?.name !== item.name ? "inverted" : ""}
                                    className={`${view?.name !== item.name ? "!text-[#000] hover:bg-[#fff]" : ""}`}
                                    text={item.name}
                                    onClick={() => setView(item)}
                                />
                            ))}
                        </div>
                        <div className='mt-10 bg-[#fff] rounded-xl p-4'>
                            <ChartView />
                        </div>
                    </div>
                    <div className='w-full mt-20'>
                        <div className='flex gap-32'>
                            <h2 className='font-bold text-xl mb-4 flex items-center'> <img src={DotIcon} className="mr-2" />{view?.name}</h2>
                            <h2 className='font-bold text-2xl mb-4 flex text-[#F29254]'>{view?.value}</h2>
                        </div>

                        <div className='p-6 rounded-2xl bg-[#fff]'>
                            <p className="list-decimal mt-4 space-y-4 ml-6 text-lg">
                                Hey, there Jamie, it’s most probable to get more bookings during festive periods. We ware always doing our best to get the propoerty the attention it deserves. Also do your best to refer and/or direct your friends to the app. Thanks.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </Styled>
    )
}

export default Analytics;

const Styled = styled.div``;



