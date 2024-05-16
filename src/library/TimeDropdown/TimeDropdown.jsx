import React from 'react';

const TimeDropdown = ({ value, onChange }) => {
  const hourlyTimes = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0');
    return `${hour}:00`;
  });

  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className="relative">
      <select
        className="block appearance-none w-full bg-white border border-[#F29254] text-gray-700 py-4 px-4 pr-8 rounded-full leading-tight"
        value={value}
        onChange={handleChange}
      >
        <option value="" disabled hidden>Please select</option>
        {hourlyTimes.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 12L6 8l-.707.707L10.293 13H3v1h7.293l-4.707 4.707L6 18l4-4 4 4-.707-.707L10 14h7v-1h-7.293l4.707-4.707L14 8l-4 4z"
          />
        </svg>
      </div>
    </div>
  );
};

export default TimeDropdown;
