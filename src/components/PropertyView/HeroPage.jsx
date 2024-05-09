import React from 'react'
import PropertyView from "../../assets/la-images/property-view.svg";

function HeroPage({details}) {
  return (
    <div className='w-full h-screen mt-20'>
        <div style={{ 
      backgroundImage: `url(${details?.imageSrc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh'
    }} class="bg-cover bg-center h-full  flex justify-center items-end ">
            <button className='floating-button bg-[#F29254] px-20 py-2 rounded-3xl text-[#fff] text-center font-semibold flex text-xl font-bold items-center cursor-pointer bottom-[30px] right-[50%] left-[50%] mb-20'>Virtual Tour</button>
        </div>
    </div>
  )
}

export default HeroPage