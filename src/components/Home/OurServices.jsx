import React, { useState } from 'react';
import ApartmentImage from "../../assets/la-images/short-stay-image.svg";
import AirportImage from "../../assets/la-images/a-n-p-image.svg";
import AOImage from "../../assets/la-images/a-o-image.svg";
import ESImage from "../../assets/la-images/e-s-image.svg";
import ESSImage from "../../assets/la-images/es-s-image.svg";
import CCIMage from "../../assets/la-images/c-c-image.svg";
import REImage from "../../assets/la-images/r-e-image.svg";
import TSImage from "../../assets/la-images/t-s-image.svg";
import SPSImage from "../../assets/la-images/sp-s-image.svg";
import Modal from '../../library/Modal/Modal';
import Button from '../../library/Button/Button';

function OurServices() {
    const [openModal, setOpenModal] = useState(false)
    const [serviceInView, setServiceInView] = useState({})

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

    const modalDetails = [
        {
            name: 'Short-stay Accomodation',
            topParagraph: "Discover your perfect getaway with Chariz Homes' premium short-stay residences. Designed for comfort, styled for relaxation.",
            list: [
                "Overview: A description of the types of properties available, highlighting the features, benefits, and options for different needs and preferences.",
                "Detailed Descriptions: Individual pages for each property type with galleries, amenities, and testimonials from satisfied guests."
            ],
            button: "Book an apartment"
        },
        {
            name: 'Airport Pick up & Drop off',
            topParagraph: "Begin and end your journey with ease. Our reliable airport transfer service ensures you're on time, every time.",
            list: [
                "Description of the service, vehicle options, and how to book along with your stay.",
            ],
            button: "Request Pick up or Drop off"
        },
        {
            name: 'Agent Onboarding',
            topParagraph: "Join our network of esteemed agents. Manage properties with us and unlock new opportunities in hospitality management.",
            list: [
                "Information on how property owners can partner with CharizHomes, including benefits, process, and testimonials from existing partners.",
            ],
            button: "Become an agent"
        },
        {
            name: 'Errand Services',
            topParagraph: "Let us handle the small stuff. Our errand service is here to assist you with daily tasks so you can focus on enjoying your stay.",
            list: [
                "Details of personalized errand services for guests, including examples and booking information.",
            ],
            button: "Request service"
        },
        {
            name: 'Escort Service',
            topParagraph: "Safety and companionship on your travels. Our discreet and professional escort service guarantees peace of mind.",
            list: [
                "Discreet mention of the availability of escort services, ensuring privacy and professionalism.",
            ],
            button: "Request escort"
        },
        {
            name: 'Chef & In-room Cooking Service',
            topParagraph: "Savor the flavors with our chef services or enjoy a home-cooked meal with our in-room cooking amenities.",
            list: [
                "Introduction to gourmet experiences right in the comfort of your stay, with profiles of chefs and menu options.",
            ],
            button: "Request chef"
        },
        {
            name: 'Refer and Earn',
            topParagraph: "Share the CharizHomes experience. Refer friends and earn rewards that enhance your stay.",
            list: [
                "Explanation of the referral program, benefits for both referrer and referee, and steps to participate.",
            ],
            button: "Refer a friend"
        },
        {
            name: 'Tourism Service',
            topParagraph: "Explore the sights and sounds. Our tourism services are your gateway to discovering local attractions and hidden gems.",
            list: [
                "Highlight of tourism packages, guides, and special tie-ups with local attractions for exclusive experiences.",
            ],
            button: "Request escort"
        },
        {
            name: 'Spa Service',
            topParagraph: "Indulge in relaxation. Our in-house spa services are designed to rejuvenate your body and mind during your stay.",
            list: [
                "Details of in-room spa services, spa menu, and how to schedule appointments along with your stay.",
            ],
            button: "Request escort"
        },

    ]

    const filterModalByName = (nameToFilter) => {
        return modalDetails.find(modal => modal.name === nameToFilter);
    }

    const showModal = (name) => {
        const object = filterModalByName(name);
        setServiceInView(object)
        setOpenModal(true)
    }

    return (
        <>
            <div className='flex flex-col w-full min-h-screen bg-[#ECECEC]'>
                <div className='w-full h-full flex flex-col justify-center py-20 ] gap-10'>
                    <h2 className='text-5xl text-[#F29254] font-medium text-center'>Our services</h2>
                    <div className='p-10 bg-[#F5F5F5] '>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[90%] m-auto">
                            {services.map(service => (
                                <div key={service.id} className="bg-white rounded-2xl p-4 flex gap-2 justify-start items-center hover:bg-[#F29254] hover:text-[#fff] cursor-pointer" onClick={() => showModal(service?.name)}>
                                    <img src={service.image} alt={service.name} className="w-[80px] h-[80px] object-cover mb-2 rounded-lg" />
                                    <p className="text-center">{service.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className=' floating-button bg-[#F29254] px-6 py-2 rounded-3xl text-[#fff] text-center font-semibold flex text-xl font-bold items-center cursor-pointer w-fit m-auto'>View More</button>

                </div>
            </div>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
                <div className='flex flex-col p-10'>
                    <h2 className='text-3xl text-[#F29254] font-bold text-center'>{serviceInView?.name}</h2>
                    <p className="mb-2 mt-10">{serviceInView?.topParagraph}</p>
                    <ul className="list-disc mt-4 space-y-4 ml-6">
                        {serviceInView && serviceInView?.list?.map(item => (
                            <li >{item}</li>
                        ))}
                    </ul>
                    <div className='mt-10 mb-4 flex justify-center'>
                        <Button
                            className={"max-w-[400px] "}
                            text={serviceInView?.button}
                        />

                    </div>
                </div>
            </Modal>
        </>
    )
}

export default OurServices