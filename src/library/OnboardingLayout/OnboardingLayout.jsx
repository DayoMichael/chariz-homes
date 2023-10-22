import React from 'react';
import PropTypes from "prop-types";
import HorizonLogo from '../../assets/icons/horizonlogo.svg';
import OnboardingLayoutImage from '../../assets/images/onboarding-layout-image.svg';
import { useNavigate } from 'react-router-dom';

function OnboardingLayout({children}) {
    const navigate = useNavigate()
    const goToSigninPage = () => {
        navigate("/")
    }
    return (
        <div className='w-full flex h-screen relative overflow-x-scroll'>
            <div className='h-full w-full lg:w-1/2 bg-[#ffffff] py-4 px-6 md:py-10 md:px-16 '>
                <div>
                    <img src={HorizonLogo} onClick={goToSigninPage} className="cursor-pointer"/>
                </div>
                <div className='flex justify-center mt-2 lg:mt-0 lg:items-center lg:max-h-screen max-w-[400px] m-auto overflow-x-scroll lg:h-full '>
                    {children}
                </div>
            </div>
            <div className='hidden h-screen w-1/2 bg-blue pt-32 pl-32 lg:flex flex-col'>
                <div className='pr-20'>
                    <p className='text-[#7A7878] text-base font-medium'>
                        “We need to have basic standards. In Malaysia there is a uniform sharia board. We have a wonderful opportunity here, because nobody has done it. We need a sharia reference for the whole industry.”
                    </p>
                    <h1 className='mt-4 font-bold text-base '>
                        NASSER AL-SHAIKH, CHAIRMAN, AMLAK FINANCE
                    </h1>
                </div>
                <div className='mt-20 overflow-hidden w-full'>
                    <img src={OnboardingLayoutImage} className="w-full"/>

                </div>


            </div>

        </div>
    )
}

export default OnboardingLayout

OnboardingLayout.propTypes = {
    children: PropTypes?.any,
};