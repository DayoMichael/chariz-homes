import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import styled from 'styled-components';
import CalendarIcon from '../../assets/la-icons/calendar-icon.svg';

const StyledDatePickerWrapper = styled.div`
  .react-datepicker-wrapper {
    display: inline-block;
    width: 100%;
  }

  .react-datepicker-popper {
    z-index: 1000;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .react-datepicker {
    font-family: inherit;
    border: none;
  }

  .react-datepicker__header {
    background-color: #F29254;
    border-bottom: none;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  .react-datepicker__current-month {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.5rem 0;
  }

  .react-datepicker__day-name {
    color: #fff;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  .react-datepicker__day {
    color: #858585;
    font-size: 0.9rem;
  }

  .react-datepicker__day--selected {
    background-color: #F29254;
    color: #fff;
  }

  .react-datepicker__day:hover {
    background-color: #f5ac7c;
    color: #fff;
  }

  .react-datepicker__day--today {
    border: 1px solid #F29254;
    background-color: transparent;
    color: #F29254;
  }
`;

function CheckInOutPicker({ startDate, endDate, setStartDate, setEndDate }) {
  const [minDate, setMinDate] = useState(new Date());

  return (
    <StyledDatePickerWrapper>
      <div className="px-6 py-4 shadow-sm rounded-full text-center font-semibold flex text-sm text-[#858585] font-bold items-center min-w-[200px] justify-center text-center border border-[#F29254] bg-[#fff] relative focus:outline-none focus:ring-[#f5ac7c] focus:border-[#f5ac7c] cursor-pointer">
        <img src={CalendarIcon} className="mr-2" />
        <div className="flex">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={minDate}
            placeholderText="Check-in"
            dateFormat="dd/MM/yyyy"
            className="w-20"
            popperPlacement="bottom-start"
            calendarClassName="orange-theme"
          />
          <span className="mx-2 text-gray-400">-</span>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate || minDate}
            placeholderText="Check-out"
            dateFormat="dd/MM/yyyy"
            className="w-20"
            popperPlacement="bottom-end"
            calendarClassName="orange-theme"
          />
        </div>
      </div>
    </StyledDatePickerWrapper>
  );
}

export default CheckInOutPicker;
