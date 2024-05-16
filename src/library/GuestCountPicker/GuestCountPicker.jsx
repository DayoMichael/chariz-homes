import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import ProfileIcon from "../../assets/la-icons/profile-icon.svg";

function GuestCountPicker() {
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleAdultChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 0) {
            setAdults(value);
        }
    };

    const handleChildrenChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 0) {
            setChildren(value);
        }
    };

    const handleRoomsChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 0) {
            setRooms(value);
        }
    };

    const incrementCount = (type) => {
        if (type === 'adults') {
            setAdults(adults + 1);
        } else if (type === 'children') {
            setChildren(children + 1);
        } else if (type === 'rooms') {
            setRooms(rooms + 1);
        }
    };

    const decrementCount = (type) => {
        if (type === 'adults' && adults > 1) {
            setAdults(adults - 1);
        } else if (type === 'children' && children > 0) {
            setChildren(children - 1);
        } else if (type === 'rooms' && rooms > 1) {
            setRooms(rooms - 1);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className="px-6 py-4 shadow-sm rounded-full text-center font-semibold flex text-sm text-[#858585] font-bold items-center min-w-[200px] justify-center text-center border border-[#F29254] bg-[#fff] relative focus:outline-none focus:ring-[#f5ac7c] focus:border-[#f5ac7c] cursor-pointer w-full"
                onClick={toggleDropdown}
            >
                <img src={ProfileIcon} className="mr-2"/>
                {adults} Adult, {children} Child, {rooms} Room
                
            </button>
            {isOpen && (
                <div className="px-4 py-6 absolute w-full z-10 top-full left-0 bg-white border border-[#F29254] rounded-md mt-2 shadow-md gap-4 flex flex-col">
                    <div className="flex items-center m">
                        <input
                            type="number"
                            className="appearance-none bg-transparent w-14 text-center focus:outline-none border border-[#000000] rounded-lg justify-center align-center"
                            value={adults}
                            onChange={handleAdultChange}
                        />
                        <span className="mx-2">Adults</span>
                        <div className="flex items-center ml-auto gap-2">
                            <button
                                className="bg-[#F29254] text-white rounded-full w-6 h-6 flex justify-center items-center"
                                onClick={() => decrementCount('adults')}
                            >
                                <IoIosArrowDown />
                            </button>
                            <button
                                className="bg-[#F29254] text-white rounded-full w-6 h-6 flex justify-center items-center"
                                onClick={() => incrementCount('adults')}
                            >
                                <IoIosArrowUp />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="number"
                            className="appearance-none bg-transparent w-14 text-center focus:outline-none border border-[#000000] rounded-lg justify-center align-center "
                            value={children}
                            onChange={handleChildrenChange}
                        />
                        <span className="mx-2">Children</span>
                        <div className="flex items-center ml-auto gap-2">
                            <button
                                className="bg-[#F29254] text-white rounded-full w-6 h-6 flex justify-center items-center"
                                onClick={() => decrementCount('children')}
                            >
                                <IoIosArrowDown />
                            </button>
                            <button
                                className="bg-[#F29254] text-white rounded-full w-6 h-6 flex justify-center items-center"
                                onClick={() => incrementCount('children')}
                            >
                                <IoIosArrowUp />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="number"
                            className="appearance-none bg-transparent w-14 text-center focus:outline-none border border-[#000000] rounded-lg justify-center align-center"
                            value={rooms}
                            onChange={handleRoomsChange}
                        />
                        <span className="mx-2">Rooms</span>
                        <div className="flex items-center ml-auto gap-2">
                            <button
                                className="bg-[#F29254] text-white rounded-full w-6 h-6 flex justify-center items-center"
                                onClick={() => decrementCount('rooms')}
                            >
                                <IoIosArrowDown />
                            </button>
                            <button
                                className="bg-[#F29254] text-white rounded-full w-6 h-6 flex justify-center items-center"
                                onClick={() => incrementCount('rooms')}
                            >
                                <IoIosArrowUp />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GuestCountPicker;
