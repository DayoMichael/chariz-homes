import React from 'react'
import { useState } from 'react'

function HeroPage() {
    const [selectedFeat, setSelectedFeat] = useState("Homes")
    const features = [
        {
            id: "homes",
            name: "Homes",
        },
        {
            id: "mgt",
            name: "Property Management",
        },
        {
            id: "pkp",
            name: "Airport Pickup/Drop off",
        },
        {
            id: "tour",
            name: "Tour Guide",
        }
    ]
    return (
        <div className='flex w-full h-screen  bg-heroImage bg-cover  flex-col '>
            <div className='w-full flex flex-col items-center justify-center items-center gap-10 md:max-w-[1235px] m-auto'>
                <h4 className='text-5xl font-semibold max-w-[775px] text-center leading-tight mt-28'>
                    Your Home for Luxury Short Stays and More
                </h4>
                <p className='text-2xl'>Experience Comfort, Convenience, and Class with Our Tailored Services</p>
                <button className='bg-[#F29254] px-6 py-2 rounded-3xl text-[#fff] text-center font-semibold flex text-xl font-bold items-center cursor-pointer'>Discover your perfect stay</button>

                <div className='p-6 border border-[#F29254] w-full mt-28 rounded-full flex gap-8 justify-center'>
                    {features.map((item, index) => (
                        <button 
                            onClick={() => setSelectedFeat(item?.name)}
                            key={item?.id}
                            className= {` floating-button px-6 py-2 rounded-3xl text-center font-semibold flex text-lg font-bold items-center min-w-[200px] justify-center text-center border border-[#F29254] ${selectedFeat === item?.name ? "bg-[#F29254] text-[#fff]" : "bg-[#fff] text-[#F29254]"}`}
                        >{item?.name}</button>))}
                </div>
            </div>
        </div>
    )
}

export default HeroPage