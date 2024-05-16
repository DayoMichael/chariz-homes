import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import CalendarIcon from '../../assets/la-icons/calendar-icon.svg';

function CheckInOutPicker() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <div className="px-6 py-4 shadow-sm rounded-full text-center font-semibold flex text-sm text-[#858585] font-bold items-center min-w-[200px] justify-center text-center border border-[#F29254] bg-[#fff] relative focus:outline-none focus:ring-[#f5ac7c] focus:border-[#f5ac7c] cursor-pointer">
            <img src={CalendarIcon} className="mr-2" />
            <div className="flex">
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    startDate={startDate}
                    endDate={endDate}
                    selectsStart
                    placeholderText="Check-in"
                    dateFormat="dd/MM/yyyy"
                    className="w-20"
                    popperClassName={`bg-white border border-[#F29254]`}
                    calendarClassName={`${
                        startDate && 'text-[#858585]'
                    }`}
                />
                <span className="mx-2 text-gray-400">-</span>
                <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    startDate={startDate}
                    endDate={endDate}
                    selectsEnd
                    placeholderText="Check-out"
                    dateFormat="dd/MM/yyyy"
                    className="w-20"
                    popperClassName={`bg-white border border-[#F29254]`}
                    calendarClassName={`${
                        endDate && 'text-[#858585]'
                    }`}
                />
            </div>
        </div>
    );
}

export default CheckInOutPicker;
