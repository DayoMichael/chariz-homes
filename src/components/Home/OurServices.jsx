import React from 'react';
import ApartmentImage from "../../assets/la-images/short-stay-image.svg";
import AirportImage from "../../assets/la-images/a-n-p-image.svg";
import AOImage from "../../assets/la-images/a-o-image.svg";
import ESImage from "../../assets/la-images/e-s-image.svg";
import ESSImage from "../../assets/la-images/es-s-image.svg";
import CCIMage from "../../assets/la-images/c-c-image.svg";
import REImage from "../../assets/la-images/r-e-image.svg";
import TSImage from "../../assets/la-images/t-s-image.svg";
import SPSImage from "../../assets/la-images/sp-s-image.svg";

function OurServices() {
    const services = [
        { id: 1, name: 'Short-stay Accomodation', image: ApartmentImage },
        { id: 2, name: 'Airport Pick up & Drop off', image: AirportImage },
        { id: 3, name: 'Agent Onboarding', image: AOImage },
        { id: 4, name: 'Errand Services', image: ESImage },
        { id: 5, name: 'Escort Service', image: ESSImage },
        { id: 6, name: 'Chef & In-room Cooking Service', image: CCIMage },
        { id: 7, name: 'Refer and Earn', image: REImage },
        { id: 8, name: 'Tourism Service', image: TSImage },
        { id: 9, name: 'Spa Service', image: SPSImage },
    ];

    return (
        <div className='flex flex-col w-full min-h-screen bg-[#ECECEC]'>
            <div className='w-full h-full flex flex-col justify-center py-20 ] gap-10'>
                <h2 className='text-5xl text-[#F29254] font-medium text-center'>Our services</h2>
                <div className='p-10 bg-[#F5F5F5] '>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[90%] m-auto">
                        {services.map(service => (
                            <div key={service.id} className="bg-white rounded-lg p-4 flex gap-2 justify-start items-center">
                                <img src={service.image} alt={service.name} className="w-[80px] h-[80px] object-cover mb-2 rounded-lg" />
                                <p className="text-center">{service.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <button className='bg-[#F29254] px-6 py-2 rounded-3xl text-[#fff] text-center font-semibold flex text-xl font-bold items-center cursor-pointer w-fit m-auto'>View More</button>

            </div>
        </div>
    )
}

export default OurServices