import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import BackIcon from "../../assets/la-icons/back-icon.svg";
import CheckInOutPicker from '../../library/CheckInOut/CheckInOut';
import GuestCountPicker from '../../library/GuestCountPicker/GuestCountPicker';
import ApartmentIcon from '../../assets/la-icons/apartment-icon.svg';
import CheckIcon from '../../assets/la-icons/check.svg';
import ProfileIcon from '../../assets/la-icons/profile-icon.svg';
import TextArea from '../../library/TextArea/TextArea';
import TimeDropdown from '../../library/TimeDropdown/TimeDropdown';
import Select from '../../library/Select/Select';

import AirportIcon from '../../assets/la-icons/airport-icon.svg';
import TourIcon from '../../assets/la-icons/tour-icon.svg';
import TourismIcon from '../../assets/la-icons/tourism-icon.svg';
import CateringIcon from '../../assets/la-icons/catering-icon.svg';
import BusIcon from '../../assets/la-icons/bus-icon.svg';
import Button from '../../library/Button/Button';
import Footer from '../Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { formatDay, formatMoney, getDayDifference } from '../../utils';
import { apartmentBooking } from '../../redux/features/auth/actions';


function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [rooms, setRooms] = useState(1);
    const [loading, setLoading] = useState(false)
    const { propertyInView, bookingParam } = useSelector(state => state.authState)
    const [selectedServices, setSelectedServices] = useState([])
    const [startDate, setStartDate] = useState(bookingParam?.startDate || null);
    const [endDate, setEndDate] = useState(bookingParam?.endDate ||null);
    const [adults, setAdults] = useState(bookingParam?.adults || 1);
    const [children, setChildren] = useState(bookingParam?.children || 0);
    const totalResident = adults + children 
    const dayDifference = getDayDifference(startDate, endDate)

    const list = ["Entire apartment", "74 m", "Private Kitchen", "Balcony", "Sea view", "Lake view", "Garden view", "Pool View", "Pool with a view", "Inner courtyard view", "Air Conditioning", "Patio", "Dish washer", "Flat-screen Tv"]
    const handleRoomsChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 0) {
            setRooms(value);
        }
    };

    const additionalServices = [
        {
            id: 1,
            text: "Airport Pickup/Drop off",
            icon: AirportIcon
        },
        {
            id: 2,
            text: "Tour Guide",
            icon: TourIcon
        },
        {
            id: 3,
            text: "Tourism Activities",
            icon: TourismIcon
        },
        {
            id: 4,
            text: "Catering Service and Chefs",
            icon: CateringIcon
        },
        {
            id: 5,
            text: "Convoy Service",
            icon: AirportIcon
        },
        {
            id: 6,
            text: "Bus Booking",
            icon: BusIcon
        },
        {
            id: 7,
            text: "Car Rental",
            icon: AirportIcon
        },
        {
            id: 8,
            text: "Escort & Security",
            icon: TourIcon
        },

    ]


    const selectService = (item) => {
        if (selectedServices.includes(item)) {
            setSelectedServices(selectedServices.filter(service => service !== item));
        } else {
            setSelectedServices([...selectedServices, item]);
        }
    }

    const bookApartment = async () => {
        const payload = {
            totalPrice: propertyInView?.price * 1000 * parseInt(rooms) * dayDifference,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
            listingId: propertyInView?.id
        }
        setLoading(true)
        const {status, data} = await dispatch(apartmentBooking(payload))
        setLoading(false)
        if(status){
            navigate("/")
        }
    }

    useEffect(() => {
        if(!propertyInView?.title){
            navigate("/properties")
        }

    }, [propertyInView])

    return (
        <Styled>
            <div className='bg-[#ECECEC] mt-20 min-h-screen'>
                <div className='flex flex-col w-full max-w-[90%] m-auto py-20 h-full'>
                    <div className='flex justify-between'>
                        <img src={BackIcon} className="cursor-pointer w-[60px]" onClick={() => navigate("/")} />
                        <h2 className='text-4xl font-bold items-center text-center flex'>Book your stay</h2>
                        <div className='gap-6 opacity-0 border border-[#F29254] px-6 py-2 items-center justify-center bg-[#fff] rounded-full h-fit'>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div className='p-6 gap-8 flex  border border-[#F29254] w-full mt-28 rounded-full flex justify-between bg-opacity-30 backdrop-filter backdrop-blur-lg w-full'>
                            <div className='w-full'>
                                <div className="w-full px-6 py-4 shadow-sm rounded-full text-center font-semibold flex text-sm text-[#858585] font-bold items-center min-w-[200px] md:w-full justify-center text-center border border-[#F29254] bg-[#fff] relative focus:outline-none focus:ring-[#f5ac7c] focus:border-[#f5ac7c] cursor-pointer">
                                    <img src={ApartmentIcon} className="mr-2" />
                                    <div
                                        id="location"
                                        name="location"
                                        className='min-w-[140px]'
                                    >
                                        <span value="" disabled selected className='!text-[#858585] text-left '>{propertyInView?.title} </span>

                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <CheckInOutPicker startDate={startDate} endDate={endDate} setStartDate={(date) => setStartDate(date)} setEndDate={(date) => setEndDate(date)} className="min-w-[140px]" />
                            </div>
                            <div className='w-full'>
                                <GuestCountPicker adults={adults} children={children} rooms={rooms} setAdults={(item) => setAdults(item)} setRooms={(item) => setRooms(item)} setChildren={(item) => setChildren(item)} className="min-w-[140px]" />
                            </div>

                        </div>

                    </div>
                    <div className='mt-10'>
                        <div className='flex justify-center'>
                            <h2 className='text-[#F29254] font-bold text-xl'>Reserve your stay</h2>
                        </div>
                        <div className='w-full rounded-2xl p-4 flex flex-col bg-[#fff] mt-2'>
                            <div className='rounded-full w-full px-6 py-2 flex bg-[#ECECEC] gap-6'>
                                <p className='w-[25%]'>Apartment</p>
                                <p className='w-[25%]'>No. of Guests</p>
                                <p className='w-[25%]'>Price for 1 Night</p>
                                <p className='w-[25%]'>Rooms</p>
                            </div>
                            <div className='w-full flex mt-10 gap-4'>
                                <div className='w-[25%]  border-r border-[#F29254] p-2'>
                                    <p>{propertyInView?.title}</p>
                                    <div className='mt-4 gap-2 flex flex-col'>
                                        {propertyInView?.checkedAmenities && propertyInView?.checkedAmenities.map(item => (
                                            <div className='flex'> <img src={CheckIcon} className="mr-2" /> <p>{item}</p></div>
                                        ))}
                                    </div>
                                </div>
                                <div className='w-[25%] border-r border-[#F29254] p-4 flex gap-2'>
                                <div className='h-fit flex'>
                                    {Array.from({ length: totalResident }).map((_, index) => (
                                        <img src={ProfileIcon} className="w-[20px]" key={index} />
                                    ))}
                                </div>
                                </div>
                                <div className='w-[25%] border-r border-[#F29254] p-4 flex gap-2'>
                                    <div className='h-fit flex'>
                                        <p>{formatMoney(propertyInView?.price * 1000 * parseInt(rooms) * dayDifference)}</p>
                                    </div>
                                </div>
                                <div className='w-[25%] p-4 flex gap-2'>
                                    <div className='h-fit flex'>
                                        <input
                                            type="number"
                                            className="appearance-none w-20 text-center focus:outline-none border border-[#F29254] bg-[#F5F5F5] rounded-2xl flex justify-center items-center px-2 py-1"
                                            value={rooms}
                                            onChange={handleRoomsChange}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='w-full flex flex-col md:flex-row mt-10 gap-8 '>
                        <div className='w-full md:w-1/2 rounded-xl p-4 flex flex-col gap-2 bg-[#ffffff]'>
                            <h2 className='font-bold'>Notes</h2>
                            <p className='text-sm text-[#565656]'>Leave any notes. Requests cannot be guaranteed but we will do our best to meet them. (Please leave your notes in English - Optional)</p>
                            <TextArea />
                        </div>
                        <div className='w-full md:w-1/2 rounded-xl p-4 flex flex-col gap-2 bg-[#ffffff]'>
                            <h2 className='font-bold'>Estimated Arrival Time</h2>
                            <p className='text-sm text-[#565656] md:max-w-[60%]'>You can check in between 16:00 and 00:00 Add your estimated arrival time (optional)</p>
                            <TimeDropdown />
                            <p className='text-sm text-[#565656]'>Time is for Nigeria (GMT+1) time zone</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col md:flex-row mt-10 gap-8 '>
                        <div className='w-full md:w-1/2 rounded-xl p-4 flex flex-col gap-2 bg-[#ffffff]'>
                            <h2 className='font-bold'>Select any additional service(s) you need</h2>
                            <div className='grid grid-cols-2 mt-4 gap-4'>
                                {additionalServices.map(item => (
                                    <Select key={item.id} {...item} selected={selectedServices.includes(item?.text)} onClick={() => selectService(item?.text)} />
                                ))}

                            </div>
                        </div>
                        <div className='w-full md:w-1/2 rounded-xl p-4 flex flex-col gap-2 bg-[#ffffff]'>
                            <h2 className='font-bold pb-4 border-b-2 border-[#858585]'>Summary</h2>
                            <div className='py-4 gap-4 flex flex-col'>
                                <div className='w-full flex justify-between'>
                                    <h2 className='font-bold'>{propertyInView?.title}, `Garki</h2>
                                    <h2 className='font-bold text-[#F29254]'>{rooms} Room(s)</h2>
                                </div>
                                <div className='w-full flex justify-between'>
                                    <p className=''>{formatDay(startDate)} - {formatDay(endDate)}</p>
                                    <h2 className='font-bold text-[#F29254]'>{formatMoney(propertyInView?.price * 1000 * parseInt(rooms) * dayDifference)}</h2>
                                </div>
                                <div className='w-full flex justify-between'>
                                    <p className=''>{bookingParam?.adults} Adult</p>
                                    <h2 className='font-bold text-[#F29254]'>{formatMoney(0)}</h2>
                                </div>
                                <div className='w-full flex justify-between'>
                                    <p className=''>Airport Pick up & Drop off</p>
                                    <h2 className='font-bold text-[#F29254]'>{formatMoney(0)}</h2>
                                </div>
                                <div className='w-full flex justify-between'>
                                    <p className=''>Tour Guide</p>
                                    <h2 className='font-bold text-[#F29254]'>{formatMoney(0)}</h2>
                                </div>
                            </div>
                            <div className='w-full flex justify-between pt-2 border-t-2 border-[#858585]'>
                                <p className=''>Total</p>
                                <h2 className='font-bold text-[#F29254]'>{formatMoney(propertyInView?.price * 1000 * parseInt(rooms) * dayDifference)}</h2>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-20'>
                        <h2 className='font-bold text-xl mb-4'>Rules and Policy</h2>
                        <div className='p-6 rounded-2xl bg-[#fff]'>
                            <ul className="list-decimal mt-4 space-y-4 ml-6">
                                <li className="text-lg">{propertyInView?.title} is a minimalistic luxurious apartment in the heart of Garki, Abuja. {propertyInView?.title} is a minimalistic luxurious apartment in the heart of Garki, Abuja.</li>
                                <li className="text-lg">{propertyInView?.title} is a minimalistic luxurious apartment in the heart of Garki, Abuja. {propertyInView?.title} is a minimalistic luxurious apartment in the heart of Garki, Abuja.</li>
                                <li className="text-lg">{propertyInView?.title} is a minimalistic luxurious apartment in the heart of Garki, Abuja.</li>
                                <li className="text-lg">Cash is not accepted</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex w-full max-w-[250px] mt-10 m-auto'>
                        <Button
                            loading={loading}
                            text={"Book"}
                            onClick={bookApartment}
                        />

                    </div>

                </div>
            </div>
            <Footer />
        </Styled>
    )
}

export default Header

const Styled = styled.div`
    

`