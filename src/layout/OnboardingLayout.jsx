import React from 'react';
import { useNavigate } from 'react-router-dom';
import CharizLogo from '../assets/la-icons/onboarding-chariz-homes-icon.svg';

function OnboardingLayout({children, text, link}) {
    const navigate = useNavigate();

    const goTo = () => {
        navigate(link)
    }
  return (
    
    <div style={{
        backgroundImage: `url(https://res.cloudinary.com/dayomichael/image/upload/v1714809968/nick-wessaert-JI01fn0U7Cg-unsplash_2_pu53zr.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: "100%"
    }} className ="font-comfortaa flex align-center">
        <div className='w-full p-6 md:p-14 h-full flex gap-10'>
            <div className='hidden w-1/2 md:flex flex-col justify-center align-center  h-full'>
                <img src={CharizLogo} className="w-[270px] h-[270px]"/>
                <h6 className='text-6xl font-normal leading-normal'>
                    Your Home for luxury short stays
                </h6>
                <p onClick={goTo}className='teext-xl font-bold cursor-pointer text-[#F29254] mt-20'>Back to {text}</p>
            </div>
            <div className='w-full md:w-1/2 flex flex-col h-full items-center justify-center'>
                <div className='flex justify-center max-w-[607px] w-full m-auto'>
                {children}
                </div>
               
            </div>
        </div>

    </div>
  )
}

export default OnboardingLayout