import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ApartmentIcon from '../../assets/la-icons/apartment-icon.svg'
import Button from '../../library/Button/Button'
import CheckInOutPicker from '../../library/CheckInOut/CheckInOut'
import GuestCountPicker from '../../library/GuestCountPicker/GuestCountPicker'

function HeroPage() {
    const navigate = useNavigate()
    const [selectedFeat, setSelectedFeat] = useState("Homes")
    const [startDate, setStartDate] = useState( null);
    const [endDate, setEndDate] = useState(null);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);
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

    const goToBookingPage = () => navigate("/properties")
    return (
        <div className='flex w-full h-screen bg-cover  flex-col  relative'>
           <img 
                src="https://res.cloudinary.com/dayomichael/image/upload/v1714809968/nick-wessaert-JI01fn0U7Cg-unsplash_2_pu53zr.png"
                srcset="https://res.cloudinary.com/dayomichael/image/upload/c_scale,w_600/v1714809968/nick-wessaert-JI01fn0U7Cg-unsplash_2_pu53zr.png 600w,
                        https://res.cloudinary.com/dayomichael/image/upload/c_scale,w_800/v1714809968/nick-wessaert-JI01fn0U7Cg-unsplash_2_pu53zr.png 800w,
                        https://res.cloudinary.com/dayomichael/image/upload/c_scale,w_1200/v1714809968/nick-wessaert-JI01fn0U7Cg-unsplash_2_pu53zr.png 1200w"
                sizes="(max-width: 600px) 600px,
                    (max-width: 800px) 800px,
                    1200px"
                loading="lazy"
                alt="Nick Wessaert Unsplash Image"
                className="z-0 absolute w-100 h-full"
            />


            <div className='w-full flex flex-col items-center justify-center items-center gap-10 md:max-w-[1235px] m-auto absolute z-10 h-full right-0 left-0'>
                <h4 className='text-5xl font-semibold max-w-[775px] text-center leading-tight mt-28'>
                    Your Home for Luxury Short Stays and More
                </h4>
                <p className='text-2xl'>Experience Comfort, Convenience, and Class with Our Tailored Services</p>
                <div className='flex w-full z-[10000px] justify-center'>


                    <div className='p-6 border border-[#F29254] w-full mt-28 rounded-full flex gap-8 justify-center bg-opacity-30 backdrop-filter backdrop-blur-lg min-w-[1400px] md:min-w-[1000px] md:w-fit'>
                        <div className="px-6 py-4 shadow-sm rounded-full text-center font-semibold flex text-sm text-[#858585] font-bold items-center min-w-[200px] md:w-fit justify-center text-center border border-[#F29254] bg-[#fff] relative focus:outline-none focus:ring-[#f5ac7c] focus:border-[#f5ac7c] cursor-pointer">
                            <img src={ApartmentIcon} className="mr-2" />
                            <select
                                id="location"
                                name="location"
                            >
                                <option value="" disabled selected className='!text-[#858585]'> Where do you want to stay?</option>
                                <option value="location1">Location 1</option>
                                <option value="location2">Location 2</option>
                                <option value="location3">Location 3</option>
                            </select>
                        </div>
                        <CheckInOutPicker startDate={startDate} endDate={endDate} setStartDate={(date) => setStartDate(date)} setEndDate={(date) => setEndDate(date)} className="min-w-[140px]" />
                        <GuestCountPicker adults={adults} children={children} rooms={rooms} setAdults={(item) => setAdults(item)} setRooms={(item) => setRooms(item)} setChildren={(item) => setChildren(item)} className="min-w-[140px]" />
                        <div className='w-[220px] min-w-[140px]'>
                            <Button
                                text='Search'
                                onClick={goToBookingPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroPage