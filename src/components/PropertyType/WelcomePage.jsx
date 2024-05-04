import React from 'react';
import AprtImage from "../../assets/la-images/aprt-image.svg";
import DuplexesImage from "../../assets/la-images/duplexes-image.svg";
import VillasImage from "../../assets/la-images/villas-image.svg";
import ApartmentImage from "../../assets/la-images/apartments-image.svg";
import StarRatings from "../../assets/la-images/star-ratings.svg";
import LocationIcons from "../../assets/la-icons/location-icon.svg";

import AlmatImage from "../../assets/la-images/almart-image.svg";
import MaitImage from "../../assets/la-images/maitama-park.svg";
import KayaksImage from "../../assets/la-images/kayaks-image.svg";

const GridItem = ({ imageUrl, name }) => (
    <div className="flex flex-col items-left w-1/3">
      <div className="w-[444px] h-[262px] overflow-hidden rounded mb-2">
        <img src={imageUrl} alt="Profile" className="object-cover w-full h-full" />
      </div>
      <p className="font-bold text-left pl-4">{name}</p>
    </div>
);

function WelcomeSection() {
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
        { id: 2, image: ApartmentImage, name: 'Birdy Chip Apartments', price: 'N250k/Night' },
        { id: 3, image: ApartmentImage, name: 'Birdy Chip Apartments', price: 'N250k/Night' },
        { id: 4, image: ApartmentImage, name: 'Birdy Chip Apartments', price: 'N250k/Night' },
    ];
    return (
        <div className='flex flex-col w-full min-h-screen bg-[#ECECEC]'>
            <div className='w-full h-full flex flex-col justify-center pb-20 max-w-[90%] m-auto gap-20'>
                <div className='w-full m-auto max-w-[1377px] bg-justForYou p-10 flex flex-col gap-4 bg-cover justify-center min-h-[263px] rounded-xl'>
                    <p className='text-2xl font-bold text-[#fff] text-center'>Just for you</p>
                    <p className='text-xl text-[#fff] text-center max-w-[900px] m-auto'>Planning a trip somewhere? Whether it’s personal, family, leisure or corporate; Grab exclusive travel offers tailored to your specific needs with Chariz Travels</p>
                    <button className='bg-[#F29254] px-16 py-2 rounded-3xl text-[#fff] text-center font-semibold flex text-md font-bold items-center cursor-pointer w-fit m-auto'>Find Travel Deals</button>
                </div>
                <div className='flex flex-col w-full max-w-[1377px] m-auto gap-10'>
                    <h2 className='text-3xl text-[#F29254] font-medium text-center'>Browse by property type</h2>
                    <div className="flex overflow-x-auto gap-10 w-full">
                        {data.map((item, index) => (
                            <GridItem key={index} imageUrl={item.imageUrl} name={item.name} />
                        ))}
                    </div>
                </div>
                <button className='bg-[#F29254] px-28 py-2 rounded-3xl text-[#fff] text-center font-semibold flex text-lg font-bold items-center cursor-pointer w-fit m-auto'>View All</button>

                <div className='flex flex-col w-full max-w-[1377px] m-auto gap-10'>
                    <h2 className='text-3xl text-[#F29254] font-medium text-center'>Stay at our top unique properties</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cards.map(card => (
                        <div key={card.id} className="rounded-xl bg-white p-2">
                            <img src={card.image} alt={card.name} className="w-full h-205 object-cover rounded-t-lg" />
                            <div className="py-4 px-2">
                                <h2 className="font-bold text-xl mb-2">{card.name}</h2>
                                <p className="font-bold text-base text-[#F29254] mb-1">N250k/Night</p>
                                <p className='text-xs flex gap-2 mb-2'> 4 Reviews <img src={StarRatings} /></p>
                                <p className='text-xs flex gap-1'><img src={LocationIcons} /> Plot 217, Behind First Bank, Garki, Abuja.</p>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
                <button className='bg-[#F29254] px-28 py-2 rounded-3xl text-[#fff] text-center font-semibold flex text-lg font-bold items-center cursor-pointer w-fit m-auto'>View More</button>

                <div className='flex flex-col w-full max-w-[1377px] m-auto gap-10'>
                    <h2 className='text-3xl text-[#F29254] font-medium text-center'>Top rated by our guests</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cards.map(card => (
                        <div key={card.id} className="rounded-xl bg-white p-2">
                            <img src={card.image} alt={card.name} className="w-full h-205 object-cover rounded-t-lg" />
                            <div className="py-4 px-2">
                                <h2 className="font-bold text-xl mb-2">{card.name}</h2>
                                <p className="font-bold text-base text-[#F29254] mb-1">N250k/Night</p>
                                <p className='text-xs flex gap-2 mb-2'> 4 Reviews <img src={StarRatings} /></p>
                                <p className='text-xs flex gap-1'><img src={LocationIcons} /> Plot 217, Behind First Bank, Garki, Abuja.</p>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
                <button className='bg-[#F29254] px-28 py-2 rounded-3xl text-[#fff] text-center font-semibold flex text-lg font-bold items-center cursor-pointer w-fit m-auto'>View More</button>
                
                <div className='flex flex-col w-full max-w-[1377px] m-auto gap-10'>
                    <h2 className='text-3xl text-[#F29254] font-medium text-center'>Things to try</h2>
                    <div className="flex overflow-x-auto gap-10 w-full">
                        {toTry.map((item, index) => (
                            <GridItem key={index} imageUrl={item.imageUrl} name={item.name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeSection