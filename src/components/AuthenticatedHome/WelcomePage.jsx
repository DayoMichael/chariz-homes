import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AprtImage from "../../assets/la-images/aprt-image.svg";
import DuplexesImage from "../../assets/la-images/duplexes-image.svg";
import VillasImage from "../../assets/la-images/villas-image.svg";
import ApartmentImage from "../../assets/la-images/apartments-image.svg";
import ApartmentTwoImage from "../../assets/la-images/apartment-two-image.svg";
import ApartmentThreeImage from "../../assets/la-images/apartment-three-image.svg";
import ApartmentFourImage from "../../assets/la-images/apartment-four-image.svg";
import StarRatings from "../../assets/la-images/star-ratings.svg";
import LocationIcons from "../../assets/la-icons/location-icon.svg";
import LocationSmallIcon from "../../assets/la-icons/location-small-icon.svg";

import AlmatImage from "../../assets/la-images/almart-image.svg";
import MaitImage from "../../assets/la-images/maitama-park.svg";
import KayaksImage from "../../assets/la-images/kayaks-image.svg";
import LoveIcon from "../../assets/la-icons/love-icon.svg";
import Modal from '../../library/Modal/Modal';
import Button from '../../library/Button/Button';


const GridItem = ({ imageUrl, name }) => (
    <div className="flex flex-col items-left cols-span-1">
        <div className="w-[100%] h-[262px] overflow-hidden rounded mb-2">

            <img src={imageUrl} alt="Profile" className="object-cover w-full h-full" />
        </div>
        <p className="font-bold text-left mt-2">{name}</p>
    </div>
);

function WelcomeSection() {
    const navigate = useNavigate()

    const data = [
        { imageUrl: AprtImage, name: 'Apartments' },
        { imageUrl: VillasImage, name: 'Villas' },
        { imageUrl: DuplexesImage, name: 'Duplexes' },
    ];

    const toTry = [
        { imageUrl: AlmatImage, name: 'Almat Farms' },
        { imageUrl: MaitImage, name: 'Maitama Amusement Parks' },
        { imageUrl: KayaksImage, name: 'Kayaks and Canoes' },
    ];

    const cards = [
        { id: 1, image: ApartmentImage, name: 'Birdy Chip Apartments', price: 'N250k/Night' },
        { id: 2, image: ApartmentTwoImage, name: 'Birdy Chip Apartments', price: 'N250k/Night' },
        { id: 3, image: ApartmentThreeImage, name: 'Birdy Chip Apartments', price: 'N250k/Night' },
        { id: 4, image: ApartmentFourImage, name: 'Birdy Chip Apartments', price: 'N250k/Night' },
    ];
    const modalDetails = [
        {
            name: ""
        }
    ]
    return (
        <>
            <div className='flex flex-col w-full min-h-screen bg-[#ECECEC]'>
                <div className='w-full h-full flex flex-col justify-center pb-20 max-w-[90%] m-auto gap-28'>
                    <div className='w-full m-auto max-w-[1377px] bg-justForYou p-10 flex flex-col gap-4 bg-cover justify-center min-h-[263px] rounded-xl'>
                        <p className='text-2xl font-bold text-[#fff] text-center'>Just for you</p>
                        <p className='text-xl text-[#fff] text-center max-w-[900px] m-auto'>Planning a trip somewhere? Whether it’s personal, family, leisure or corporate; Grab exclusive travel offers tailored to your specific needs with Chariz Travels</p>
                        <button className='floating-button bg-[#F29254] px-16 py-2 rounded-3xl text-[#fff] text-center font-semibold flex text-md font-bold items-center cursor-pointer w-fit m-auto'>Find Travel Deals</button>
                    </div>
                    <div className='flex flex-col w-full max-w-[1377px] m-auto gap-10'>
                        <h2 className='text-2xl md:text-3xl text-[#F29254] font-bold text-center'>Browse by property type</h2>
                        <div className="flex grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-10 mt-10">
                            {data.map((item, index) => (
                                <GridItem key={index} imageUrl={item.imageUrl} name={item.name} />
                            ))}
                        </div>
                        <button className='floating-button bg-[#F29254] px-28 py-2 rounded-3xl text-[#fff] text-center font-semibold flex text-lg font-bold items-center cursor-pointer w-fit m-auto' onClick={() => navigate("/property-type")}>View All</button>
                    </div>


                    <div className='flex flex-col w-full max-w-[1377px] m-auto gap-10'>
                        <h2 className='text-3xl text-[#F29254] font-bold text-center'>Stay at our top unique properties</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {cards.map(card => (
                                <div key={card.id} className="rounded-xl bg-white p-2 relative">
                                    <img src={LoveIcon} className="absolute top-4 right-6" />
                                    <img src={card.image} alt={card.name} className="w-full h-205 object-cover rounded-lg" />
                                    <div className="py-4 px-2">
                                        <h2 className="font-bold text-xl mb-2">{card.name}</h2>
                                        <p className="font-bold text-base text-[#F29254] mb-1">N250k/Night</p>
                                        <p className='text-xs flex gap-2 mb-2'> 4 Reviews <img src={StarRatings} /></p>
                                        <p className='text-[10px] flex gap-1 pb-6 mt-4'><img src={LocationIcons} /> Plot 217, Behind First Bank, Garki, Abuja.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className='floating-button bg-[#F29254] px-28 py-2 rounded-3xl text-[#fff] text-center font-semibold flex text-lg font-bold items-center cursor-pointer w-fit m-auto' onClick={() => navigate("/properties")}>View More</button>
                    </div>


                    <div className='flex flex-col w-full max-w-[1377px] m-auto gap-10'>
                        <h2 className='text-3xl text-[#F29254] font-bold text-center'>Top rated by our guests</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {cards.map(card => (
                                <div key={card.id} className="rounded-xl bg-white p-2 relative">
                                    <img src={LoveIcon} className="absolute top-4 right-6" />
                                    <img src={card.image} alt={card.name} className="w-full h-205 object-cover rounded-lg" />
                                    <div className="py-4 px-2">
                                        <h2 className="font-bold text-xl mb-2">{card.name}</h2>
                                        <p className="font-bold text-base text-[#F29254] mb-1">N250k/Night</p>
                                        <p className='text-xs flex gap-2 mb-2'> 4 Reviews <img src={StarRatings} /></p>
                                        <p className='text-[10px] flex gap-1 pb-6 mt-4'><img src={LocationIcons} /> Plot 217, Behind First Bank, Garki, Abuja.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className='floating-button bg-[#F29254] px-28 py-2 rounded-3xl text-[#fff] text-center font-semibold flex text-lg font-bold items-center cursor-pointer w-fit m-auto' onClick={() => navigate("/properties")}>View More</button>
                    </div>


                    <div className='flex flex-col w-full max-w-[1377px] m-auto gap-10'>
                        <div className='flex gap-2 items-center justify-center'>
                            <h2 className='text-3xl text-[#F29254] font-bold text-center'>Things to try in </h2>
                            <div className="px-4 py-2 shadow-sm rounded-full font-semibold flex text-sm text-[#858585] font-bold items-center min-w-[240px] text-center border border-[#F29254] bg-[#fff] relative focus:outline-none focus:ring-[#f5ac7c] focus:border-[#f5ac7c] cursor-pointer">
                                <img src={LocationSmallIcon} className="mr-2" />
                                <select
                                    id="location"
                                    name="location"
                                    className='w-full'
                                >
                                    <option value="" disabled selected className='!text-[#858585] w-full'> Abuja</option>
                                    <option value="location1">Abuja</option>
                                    <option value="location2">Lagos</option>
                                    <option value="location3">Port harcourt</option>
                                </select>
                            </div>

                        </div>
                        <div className="flex overflow-x-auto gap-10 w-full">
                            {toTry.map((item, index) => (
                                <GridItem key={index} imageUrl={item.imageUrl} name={item.name} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default WelcomeSection