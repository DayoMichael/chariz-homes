import React, { useState } from 'react';
import { styled } from 'styled-components';
import BackIcon from "../../assets/la-icons/back-icon.svg";
import DropDownIcon from "../../assets/la-icons/dropdown-icon.svg"
import DropDownArrow from "../../assets/la-icons/dropdown-arrow.svg";
import ApartmentImage from "../../assets/la-images/apartments-image.svg";
import StarRatings from "../../assets/la-images/star-ratings.svg";
import LoveIcon from "../../assets/la-images/love-icon.svg";
import LocationIcons from "../../assets/la-icons/location-icon.svg";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect } from 'react';
import { getPropertiesListing } from '../../redux/features/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../library/Loader/Loader';
import { useNavigate } from 'react-router-dom';

const CheckboxComponent = ({ name, count }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    return (
        <div className="flex items-center justify-between py-2">
            <label className="flex items-center">
                <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-primary"
                    checked={checked}
                    onChange={handleCheckboxChange}
                />
                <span className="ml-2">{name}</span>
            </label>
            <span className="text-gray-500">{count}</span>
        </div>
    );
};

function PropertyList() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const listingsRedux = useSelector(state => state.authState.listings);
    const [value, setValue] = useState([0, 1000000]);
    const [loading, setLoading] = useState(true)
    const [listings, setListings] = useState(listingsRedux || [])


    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const data = [
        { name: 'Apartments', count: 10 },
        { name: 'Breakfast included', count: 15 },
        { name: '5 star', count: 20 },
        { name: 'Airport shuttle', count: 5 },
        { name: 'No Repayment', count: 8 },
        { name: 'Air conditioning', count: 6 },
        { name: 'Free WiFi', count: 2 },
    ];

    const facilities = [
        { name: 'Parking', count: 10 },
        { name: 'Non-smoking rooms', count: 15 },
        { name: 'Family Rooms', count: 20 },
        { name: 'Swimming pool', count: 5 },
        { name: 'Pets Allowed', count: 8 },
        { name: 'Fitness center', count: 6 },
        { name: 'Wheelchair Accesible', count: 2 },
    ];

    const propertyType = [
        { name: 'Entire Homes', count: 10 },
        { name: 'Apartments', count: 15 },
        { name: 'Houses', count: 20 },
        { name: 'Homestays', count: 5 },
        { name: 'Villas', count: 8 },
        { name: 'Lodges', count: 6 },
        { name: 'Bed and Breakfast', count: 2 },
    ];

    const cards = [
        { id: 1, image: ApartmentImage, name: 'Birdy Chip Apartments', price: 'N250k/Night' },
        { id: 2, image: ApartmentImage, name: 'Birdy Chip Apartments', price: 'N250k/Night' },
        { id: 3, image: ApartmentImage, name: 'Birdy Chip Apartments', price: 'N250k/Night' },
        { id: 4, image: ApartmentImage, name: 'Birdy Chip Apartments', price: 'N250k/Night' },
        { id: 1, image: ApartmentImage, name: 'Birdy Chip Apartments', price: 'N250k/Night' },
        { id: 2, image: ApartmentImage, name: 'Birdy Chip Apartments', price: 'N250k/Night' },
        { id: 3, image: ApartmentImage, name: 'Birdy Chip Apartments', price: 'N250k/Night' },
        { id: 4, image: ApartmentImage, name: 'Birdy Chip Apartments', price: 'N250k/Night' },
        { id: 1, image: ApartmentImage, name: 'Birdy Chip Apartments', price: 'N250k/Night' },
        { id: 2, image: ApartmentImage, name: 'Birdy Chip Apartments', price: 'N250k/Night' },
        { id: 3, image: ApartmentImage, name: 'Birdy Chip Apartments', price: 'N250k/Night' },
        { id: 4, image: ApartmentImage, name: 'Birdy Chip Apartments', price: 'N250k/Night' },
    ];

    const goToDetailsPage = (id) => {
        navigate(`/property-view?id=${id}`)
    }

    const fetchAllListings = async() => {
        setLoading(true)
        const {status, data} =  await dispatch(getPropertiesListing())
        setLoading(false)
        if(status){
            setListings(data?.listings)
        }
    }

    useEffect(() => {
        // if(listingsRedux?.length === 0){
            fetchAllListings()
        // }
       
    },[])

    if(loading){
        return <div className='mt-32'><Loader /></div>
    }

    return (
        <Styled>
            <div className='bg-[#ECECEC] mt-20 min-h-screen'>
                <div className='flex flex-col w-full max-w-[90%] m-auto py-20 h-full'>
                    <div className='flex justify-between items-center'>
                        <div className=' w-1/3'>
                        <img src={BackIcon} className="cursor-pointer w-[50px]" onClick={() => navigate("/")} />
                        </div>
                       
                        <h2 className='text-4xl font-bold items-center text-center flex w-1/3'>{data?.length} Properties Found</h2>
                        <div className='gap-6 flex border border-[#F29254] px-6 py-2 items-center justify-center bg-[#fff] rounded-full h-fit'>
                            <img src={DropDownIcon} />
                            <p >Our Top Picks</p>
                            <img src={DropDownArrow} />
                        </div>
                    </div>
                    <div className='h-full grid  grid-cols-2 md:grid-cols-4 gap-10 mt-10 py-10'>
                        <div className='h-full col-span-1 bg-[#fff] rounded-2xl w-full p-6'>
                            <h2 className='text-[#F29254] text-2xl font-bold pb-4 border-b border-[#000]'>Filter by</h2>
                            <div className='border-b border-[#000] py-4'>
                                <p className='text-lg font-bold mb-2'> Your Budget (per night)</p>
                                <p className='text-lg'> NGN{value?.[0]} - NGN{value?.[1]}</p>
                                <div className='mt-10'>
                                    <Slider
                                        min={0}
                                        max={100000}
                                        value={value}
                                        onChange={handleChange}
                                        range
                                    />
                                </div>
                            </div>
                            <div className='border-b border-[#000] py-4'>
                                <p className='font-bold text-[#F29254]'>Popular Filters</p>
                                <div className="w-full mt-4">
                                    {data.map((item, index) => (
                                        <CheckboxComponent key={index} name={item.name} count={item.count} />
                                    ))}
                                </div>
                            </div>
                            <div className='border-b border-[#000] py-4'>
                                <p className='font-bold text-[#F29254]'>Facilities</p>
                                <div className="w-full mt-4">
                                    {facilities.map((item, index) => (
                                        <CheckboxComponent key={index} name={item.name} count={item.count} />
                                    ))}
                                </div>
                            </div>
                            <div className='border-b border-[#000] py-4'>
                                <p className='font-bold text-[#F29254]'>Property Type</p>
                                <div className="w-full mt-4">
                                    {propertyType.map((item, index) => (
                                        <CheckboxComponent key={index} name={item.name} count={item.count} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='h-screen  col-span-1 md:col-span-3 w-full'>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {listings.map(card => (
                                    <div key={card.id} className="rounded-3xl bg-white p-2 relative">
                                        <img src={card.imageSrc} alt={card.title} className="w-full h-[205px] object-cover rounded-2xl" />
                                        <img src={LoveIcon} alt={"like"} className=" absolute right-4 top-4" />
                                        <div className="py-4 px-2">
                                            <h2 className="font-bold text-md mb-1">{card.title}</h2>
                                            <h2 className="font-bold text-md text-[#F29254] mb-1">N{card?.price}k/Night</h2>
                                            <p className='text-xs flex gap-2 mt-2'> 4 Reviews <img src={StarRatings} /></p>
                                            <p className='text-[10px] flex gap-1 pb-6 mt-2'><img src={LocationIcons} /> Nigeria</p>
                                            <div className='mt-1'>
                                            <button 
                                                onClick={() => goToDetailsPage(card?.id)}
                                                className='floating-button bg-[#F29254] px-10 py-2 rounded-3xl text-[#fff] text-center font-semibold flex text-md font-bold items-center cursor-pointer w-full justify-center'
                                            >Check Availability</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </Styled>
    )
}

export default PropertyList

const Styled = styled.div`
    .rc-slider-handle {
        width: 16px;
        height: 16px;
        background-color: #F29254 !important;
        border: solid 2px #F29254 !important;
    }
    .rc-slider-track, .rc-slider-tracks {
    position: absolute;
    height: 6px;
    background-color: #F29254;
    }
`