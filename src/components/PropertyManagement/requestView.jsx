import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import BackIcon from "../../assets/la-icons/back-icon.svg";
import AprtImage from "../../assets/la-images/aprt-image.svg";
import DuplexesImage from "../../assets/la-images/duplexes-image.svg";
import VillasImage from "../../assets/la-images/villas-image.svg";
import Footer from '../Footer';


const StatusCard = ({ status }) => {
    const classDetails = [
        {
            id: 1,
            name: "Pending",
            bgColor: "#FDDAC4",
            text: "#AB4412"
        },
        {
            id: 2,
            name: "Approved",
            bgColor: "#319F43",
            text: "#fff"
        },
        {
            id: 3,
            name: "Declined",
            bgColor: "#C29491",
            text: "#fff"
        },
    ]

    const classNameDetails = classDetails?.find((item) => item?.name === status)
    return (
        <div className='w-full flex justify-between mt-4 '>
            <div className={`px-6 py-2 text-sm bg-[${classNameDetails?.bgColor}] text-[${classNameDetails?.text}] font-bold rounded-full  `}>{status}</div>
            <p className='text-[#F29254]'>{status === "Approved" ? "Visit Dashboard" : ""}</p>
        </div>)
}


const GridItem = ({ imageUrl, name, status }) => {
    const classDetails = [
        {
            id: 1,
            name: "Pending",
            bgColor: "#FDDAC4",
            text: "#AB4412"
        },
        {
            id: 2,
            name: "Approved",
            bgColor: "#319F43",
            text: "#fff"
        },
        {
            id: 3,
            name: "Declined",
            bgColor: "#C29491",
            text: "#fff"
        },
    ]
    const classNameDetails = classDetails?.find((item) => item?.name === status)

    return (
        <div className="flex flex-col items-left cols-span-1 bg-[#fff] p-3 rounded-xl">
            <div className="w-[100%] h-[208px] overflow-hidden rounded-xl mb-2">
                <img src={imageUrl} alt="Profile" className="object-cover w-full h-full" />
            </div>
            <p className="font-bold text-left text-md">{name}</p>
            <div className='w-full flex justify-between mt-4 items-center'>
                <div className={`px-6 py-2 text-sm bg-[${classNameDetails?.bgColor}] text-[${classNameDetails?.text}] font-bold rounded-full  `}>{status}</div>
                <p className='text-[#F29254] font-bold cursor-pointer'>{status === "Approved" ? "Visit Dashboard" : status === "Declined" ? "See Feedback": ""}</p>
            </div>
        </div>
    )
};

function RequestView() {
    const navigate = useNavigate()
    const data = [
        { imageUrl: AprtImage, name: 'Birdy Chip Apartments', status: "Pending" },
        { imageUrl: VillasImage, name: 'Vista Court', status: "Approved" },
        { imageUrl: DuplexesImage, name: 'Esther’s Place', status: "Declined" },
    ];
    return (
        <Styled>
            <div className='bg-[#ECECEC] mt-20 min-h-screen'>
                <div className='flex flex-col w-full max-w-[90%] m-auto py-20 h-full '>
                    <div className='flex justify-between'>
                        <img src={BackIcon} className="cursor-pointer w-[40px] md:w-[60px]" onClick={() => navigate("/property-management")} />
                        <h2 className='text-2xl md:text-3xl font-bold items-center text-center flex'>My Requests</h2>
                        <div className='gap-6 opacity-0 border border-[#F29254] px-6 py-2 items-center justify-center bg-[#fff] rounded-full h-fit'>
                        </div>
                    </div>
                    <p className='text-sm text-center mt-10 max-w-[1072px] m-auto'>Chariz Homes' Property Management Services offer a full spectrum of services designed to transform properties into thriving short-stay rentals. With a focus on quality, efficiency, and guest satisfaction, Chariz Homes is poised to redefine property management, delivering bespoke experiences for owners and guests alike.</p>
                    <div className="flex grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-10 mt-10">
                        {data.map((item, index) => (
                            <GridItem key={index} imageUrl={item.imageUrl} name={item.name} status={item?.status} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </Styled>
    )
}

export default RequestView

const Styled = styled.div`
    

`