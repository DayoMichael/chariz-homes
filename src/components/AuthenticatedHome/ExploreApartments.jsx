import React from 'react';
import ApartmentImage from "../../assets/la-images/apartments-image.svg";
import StarRatings from "../../assets/la-images/star-ratings.svg";
import LocationIcons from "../../assets/la-icons/location-icon.svg";

function ExploreApartments() {
    const cards = [
        { id: 1, image: ApartmentImage, name: 'Apartment 1', price: 'N250k/Night' },
        { id: 2, image: ApartmentImage, name: 'Apartment 2', price: 'N250k/Night' },
        { id: 3, image: ApartmentImage, name: 'Apartment 3', price: 'N250k/Night' },
        { id: 4, image: ApartmentImage, name: 'Apartment 4', price: 'N250k/Night' },
        { id: 5, image: ApartmentImage, name: 'Apartment 5', price: 'N250k/Night' },
        { id: 6, image: ApartmentImage, name: 'Apartment 6', price: 'N250k/Night' },
        { id: 7, image: ApartmentImage, name: 'Apartment 7', price: 'N250k/Night' },
        { id: 8, image: ApartmentImage, name: 'Apartment 8', price: 'N250k/Night' },
    ];

    return (
        <div className='flex flex-col w-full min-h-screen bg-[#ECECEC]'>
            <div className='w-full h-full flex flex-col justify-center py-20 max-w-[90%] m-auto gap-10'>
                <h2 className='text-5xl text-[#F29254] font-medium text-center'>Explore our apartments</h2>
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
                <button className='floating-button bg-[#F29254] px-6 py-2 rounded-3xl text-[#fff] text-center font-semibold flex text-xl font-bold items-center cursor-pointer w-fit m-auto'>View More</button>

            </div>
        </div>
    )
}

export default ExploreApartments