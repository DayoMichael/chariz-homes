import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { styled } from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BackIcon from "../../assets/la-icons/back-icon.svg";
import AprtImage from "../../assets/la-images/aprt-image.svg";
import LocationIcon from "../../assets/la-icons/location-icon.svg";
import EarningsImage from "../../assets/la-images/earning-image.svg";
import BookingImaage from "../../assets/la-images/booking-image.svg";
import RatingsImage from "../../assets/la-images/ratings.svg";
import ReviewsImage from "../../assets/la-images/reviews-image.svg";
import ClickRateImage from "../../assets/la-images/click-image.svg";
import LinkIcon from "../../assets/la-icons/link-arrow-icon.svg";

import Button from '../../library/Button/Button';

const GridItem = ({ imageUrl, name }) => {
    return (
        <>
            <div className="flex flex-col items-left cols-span-1 bg-[#fff] p-3 rounded-xl">
                <div className="w-[100%] h-[208px] overflow-hidden rounded-xl mb-2">
                    <img src={AprtImage} alt="Profile" className="object-cover w-full h-full" />
                </div>
                <div className='flex justify-between mt-2'>
                    <p className="font-bold text-left text-sm">Birdy Chip Apartments</p>
                    <p className="font-bold text-left text-sm text-[#F29254]">N250k/Night</p>
                </div>
                <div className='flex items-center mt-6'>
                    <img src={LocationIcon} />
                    <p className='text-xs ml-2'>Plot 217, Behind First Bank, Garki, Abuja.</p>
                </div>


            </div>
        </>
    )
};

function DashboardView() {
    const navigate = useNavigate();
    let sliderRef = useRef(null);

    console.log(sliderRef, "sliderRef")

    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Styled>
            <div className='bg-[#ECECEC] mt-20 min-h-screen'>
                <div className='flex flex-col w-full max-w-[90%] m-auto py-20 h-full '>
                    <div className='flex justify-between'>
                        <img src={BackIcon} className="cursor-pointer w-[40px] md:w-[60px]" onClick={() => navigate("/property-management")} />
                        <h2 className='text-2xl md:text-3xl font-bold items-center text-center flex'>Dashboard</h2>
                        <div className='gap-6 opacity-0 border border-[#F29254] px-6 py-2 items-center justify-center bg-[#fff] rounded-full h-fit'>
                        </div>
                    </div>
                    <div className='mt-10 grid grid-cols-3 gap-4'>
                        <div className='col-span-1 slider-container'>
                            <Slider
                                ref={slider => {
                                    sliderRef = slider;
                                }}
                                {...settings}
                            >
                                <GridItem />
                                <GridItem /><GridItem /><GridItem />
                                <GridItem />
                            </Slider>
                        </div>
                        <div className='col-span-2 gap-4 flex flex-col '>
                            <div className='bg-[#fff] rounded-xl w-full px-6 text-xl font-bold py-4'>Overview</div>
                            <div className='grid grid-cols-3 grid-rows-2 gap-4 h-full'>
                                <div className='col-span-1 row-span-2 bg-[#fff] rounded-xl p-4 justify-center text-center flex flex-col relative cursor-pointer' onClick={() => navigate("/property-analytics")}>
                                    <img src={LinkIcon} className="top-2 right-2 h-fit absolute" />
                                    <img src={EarningsImage} className="h-[50px]" />
                                    <p className='text-sm mt-4'>Earning</p>
                                    <h2 className='font-black text-lg text-[#F29254] mt-3'>N1,343,232</h2>
                                    <Button
                                        className={"justify-end mt-8 !px-2"}
                                        text="Request Withdrawal"
                                    />
                                </div>
                                <div className='col-span-1 row-span-1 bg-[#fff] rounded-xl p-4 items-center text-center flex gap-4 relative cursor-pointer' onClick={() => navigate("/property-analytics")}>
                                    <img src={LinkIcon} className="top-2 right-2 h-fit absolute" />
                                    <img src={BookingImaage} className="h-[50px]" />
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-left'>Bookings</p>
                                        <h2 className='text-[#F29254] font-black text-xl text-left'>14 </h2>
                                    </div>
                                </div>
                                <div className='col-span-1 row-span-1 bg-[#fff] rounded-xl p-4 items-center text-center flex gap-4 relative cursor-pointer' onClick={() => navigate("/property-analytics")}>
                                    <img src={LinkIcon} className="top-2 right-2 h-fit absolute" />
                                    <img src={RatingsImage} className="h-[50px]" />
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-left'>Ratings</p>
                                        <h2 className='text-[#F29254] font-black text-xl text-left'>4.3 </h2>
                                    </div>
                                </div>
                                <div className='col-span-1 row-span-1 bg-[#fff] rounded-xl p-4 items-center text-center flex gap-4 relative cursor-pointer' onClick={() => navigate("/property-analytics")}>
                                    <img src={LinkIcon} className="top-2 right-2 h-fit absolute" />
                                    <img src={ReviewsImage} className="h-[50px]" />
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-left'>Reviews</p>
                                        <h2 className='text-[#F29254] font-black text-xl text-left'>190 </h2>
                                    </div>
                                </div>
                                <div className='col-span-1 row-span-1 bg-[#fff] rounded-xl p-4 items-center text-center flex gap-4 relative cursor-pointer' onClick={() => navigate("/property-analytics")}>
                                    <img src={LinkIcon} className="top-2 right-2 h-fit absolute" />
                                    <img src={ClickRateImage} className="h-[50px]" />
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-left'>Click Rate</p>
                                        <h2 className='text-[#F29254] font-black text-xl text-left'>103% </h2>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Styled>
    )
}

export default DashboardView

const Styled = styled.div`
    .slick-dots {
        background-color: "#D9D9D9" !important;
    }

`