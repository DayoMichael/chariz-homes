import React from 'react';
import WelcomeImage from "../../assets/la-images/welcome-image.svg"

function WelcomeSection() {

    return (
        <div className='flex flex-col w-full min-h-screen bg-[#ECECEC]'>
            <div className='w-full h-full flex flex-col justify-center py-36 max-w-[90%] m-auto gap-10'>
                <p className='text-xl font-medium text-center'>Welcome to CharizHomes, where every stay is curated for your ultimate comfort and convenience. Experience the luxury of choice with our array of bespoke services, from short-stay accommodations to comprehensive travel and lifestyle amenities. Dive into the Chariz Homes difference today!</p>
                <div className='flex justify-center items-center'>
                    <img
                        src={WelcomeImage}
                    />
                </div>
                <p className='text-xl font-medium text-center'>Chariz Homes is more than just a place to stay; it's a haven for those seeking a blend of home comfort and luxury services. With our passion for hospitality, we've crafted an experience that goes beyond the traditional, making every moment of your stay exceptional.</p>
                <button className='bg-[#F29254] px-6 py-2 rounded-3xl text-[#fff] text-center font-semibold flex text-xl font-bold items-center cursor-pointer w-fit m-auto'>Become a partner</button>

            </div>
            {/* <div className='w-full h-[250px] bg-[#FDDAC4] relative justify-center items-center'>
                <div className='flex absolute -top-20 h-full gap-10  w-full m-auto h-[290px] w-[1306px] px-20'>
                    <div className='rounded h-full bg-missionImage w-1/2 bg-contain'></div>
                    <div className='rounded h-full bg-visionImage w-1/2 bg-contain'></div>
                </div>
            </div> */}
            <div className='h-[67px] bg-[#F29254] text-xl font-medium flex text-[#fff] justify-center items-center'>
            Become a Partner Agent / Book Your Stay / Explore Our Services. Become a Partner Agent / Book Your Stay / Explore Our Services.
            </div>
        </div>
    )
}

export default WelcomeSection