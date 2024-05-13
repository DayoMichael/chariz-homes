import React, { useState } from 'react';
import OnboardingLayout from '../../layout/OnboardingLayout';
import SuccessImage from '../../assets/la-images/password-reset-image.svg';
import Button from '../../library/Button/Button';

function ResetSuccessful() {


   

    return (
        <OnboardingLayout link="/" text={"home"}>
            <div className='border-2 border-[#F29254] h-full rounded-3xl w-full bg-opacity-30 backdrop-filter backdrop-blur-lg justify-center px-12 py-16'>
                <h2 className='text-2xl text-center text-[#F29254] font-semibold'>Password reset successful</h2>
                <p className='mt-4 text-center text-lg'>Hey, you have successfully reset your password</p>
                <div className='mt-10 flex flex-col gap-4 justify-center'>
                   <img src={SuccessImage}  className="w-[300px] m-auto"/>
                </div>
                <div className='mt-20 mb-10'>
                    <div className='max-w-[70%] m-auto'>
                        <Button
                            text='Login'
                            disabled={false}
                        />
                        
                    </div>
                   
                </div>
            </div>
        </OnboardingLayout>
    )
}

export default ResetSuccessful;
