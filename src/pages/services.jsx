import React from 'react';
import AppLayout from '../layout/AppLayout';
import ApartmentImage from "../assets/la-images/short-stay-image.svg";
import AirportImage from "../assets/la-images/a-n-p-image.svg";
import AOImage from "../assets/la-images/a-o-image.svg";
import ESImage from "../assets/la-images/e-s-image.svg";
import ESSImage from "../assets/la-images/es-s-image.svg";
import CCIMage from "../assets/la-images/c-c-image.svg";
import REImage from "../assets/la-images/r-e-image.svg";
import TSImage from "../assets/la-images/t-s-image.svg";
import SPSImage from "../assets/la-images/sp-s-image.svg";
import Footer from '../components/Footer';

function Services() {
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
        <AppLayout>
            <div className='flex flex-col w-full min-h-screen bg-[#ECECEC] mt-20'>
                <div className='w-full h-full flex flex-col justify-center py-20 ] gap-10 '>
                    <h2 className='text-5xl text-[#F29254] font-medium text-center'>Our services</h2>
                    <p className='text-lg font-medium text-center max-w-[900px] m-auto'>We believe in offering more than just a place to stay; we provide an experience that feels like home, enriched with premium services tailored to your every need.</p>
                    <div className='p-10 max-w-[1400px] m-auto'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[90%] m-auto">
                            {services.map(service => (
                                <div key={service.id} className="bg-white rounded-2xl p-4 flex gap-2 justify-start items-center">
                                    <img src={service.image} alt={service.name} className="w-[80px] h-[80px] object-cover mb-2 rounded-lg" />
                                    <p className="text-center">{service.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[368px] w-full bg-[#FDDAC4] flex flex-col justify-center items-center p-14 gap-4'>
                <p className='text-lg text-[#AB4412] max-w-[872px] m-auto text-center'>We're here to help. Contact CharizHomes for inquiries, support, or more information about our services.</p>
                <input className='rounded-full bg-[#fff] max-w-[676px] m-auto w-full px-10 py-4' placeholder='Enter Your Email'></input>
                <button className='floating-button rounded-full bg-[#fff] text-[#F29254] font-bold max-w-[367px] m-auto w-full px-10 py-4 flex justify-center items-center'>Subscribe</button>
            </div>
            <Footer />
        </AppLayout>
    )
}

export default Services