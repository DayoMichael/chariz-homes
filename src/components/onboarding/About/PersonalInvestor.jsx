import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowIcon from '../../../assets/icons/arrow-icon.svg';
import Button from '../../../library/Button/Button';
import Dropdown from '../../../library/Dropdown/Dropdown';
import FileUploader from '../../../library/FileUploader/FileUploader';
import InputField from '../../../library/InputField/InputField';
import SuccessIcon from '../../../assets/icons/success-icon.svg';

function PersonalInvestor() {
    const navigate = useNavigate();
    const [termsApproved, setTermsApproved] = useState(false);
    const [success, setSuccess] = useState(false)

    const list = [
        {
            name: "National Id"
        },
        {
            name: "Passport"
        },
    ]

    const goToSigninPage = () => {
        navigate("/")
    }

    const goToSignupPage = () => {
        navigate("/signup")
    }

    const createAccount = () => {
        setSuccess(true)
    }

    if (success) {
        return (
            <div className='flex flex-col items-center'>
                <img src={SuccessIcon} className="w-[100px] h-[100px]" />
                <p className='text-base mt-6 font-bold text-center'>Registration Complete</p>
                <p className='text-sm text-[#7A7878] text-center mt-2'>A verification email has been sent. Please check your inbox or spam</p>
                <div className='mt-10 w-full'>
                <Button
                    text={"Login"}
                    onClick={goToSigninPage}
                />
                </div>

            </div>
        )
    }
    return (
        <div className='flex flex-col w-full overflow-x-scroll'>
            <img src={ArrowIcon} className="w-[24px] h-[24px] cursor-pointer" onClick={goToSignupPage}/>
            <p className='mt-4'>Provide more details to create your account</p>
            <div className='w-full flex gap-2'>
                <InputField
                    label="First name"
                    placeholder="First name"
                />
                <InputField
                    label="Last name"
                    placeholder="Last name"
                />
            </div>
            <InputField
                label="Address"
                placeholder="Enter full house address"
            />
            <Dropdown
                label='PhotoID'
                list={list}
            />
            <FileUploader
                label={""}
            />
            <div className='flex mt-6 gap-2'>
                <div className={`w-[34px] h-[20px] border-2 border-[#000000] rounded ${termsApproved ? "bg-[#008000] border-[#008000]" : ""}`} onClick={() => setTermsApproved(!termsApproved)}></div>
                <span className='text-sm text-[#7A7878] '>
                    By creating an account you have agreed to our <span className='text-[#1C51D7] font-semibold'>Terms & Conditions</span> and provided accurate information
                </span>
            </div>
            <div className='mt-6'>
                <Button
                    text='Create Account'
                    onClick={createAccount}
                />
            </div>

            <div className='mt-5'>
                <p className='text-center text-[#7A7878] text-base mt-2 font-medium'> Already have an account? <span className='font-bold cursor-pointer' onClick={goToSigninPage}>Sign In</span></p>

            </div>
        </div>
    )
}

export default PersonalInvestor