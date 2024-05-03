import React from 'react';
import LocationIcon from "../../assets/la-icons/location-icon.svg"

function PropertyDetails() {
  return (
    <div className='flex flex-col w-full max-w-[90%] m-auto py-20'>
      <div className='w-full flex justify-between'>
        <h4 className='text-4xl font-bold'>Birdy Chip Apartments, Garki</h4>
        <h4 className='text-4xl font-bold text-[#F29254]'>N250K</h4>
      </div>
      <div className='w-full flex justify-between mt-4'>
        <p className='text-sm font-bold text-[#000] flex gap-2 justify-center items-center'><img src={LocationIcon} /> Plot 217, Behind First Bank, Garki, Abuja. <span className='text-[#F29254]'>Show on map</span> </p>
        <button className=' bg-[#F29254] px-10 py-2 rounded-3xl text-[#fff] text-center font-semibold flex text-xl font-bold'>Check Availability</button>
      </div>

      <div className=''>

      </div>

    </div>
  )
}

export default PropertyDetails