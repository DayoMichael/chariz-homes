import React, { useState } from 'react';
import OnboardingLayout from '../../../library/OnboardingLayout/OnboardingLayout';
import InputField from '../../../library/InputField/InputField';
import Button from '../../../library/Button/Button';
import { useNavigate } from 'react-router-dom';
import PasswordIcon from '../../../assets/icons/password-icon.svg';
import SuccessIcon from '../../../assets/icons/success-icon.svg';


function ResetPassword() {
    const [step, setStep] = useState(1)
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()

    const goToSignupPage = () => {
        navigate("/signup")
    }

    const goToSigninPage = () => {
        navigate("/")
    }

    const submitNewPassword = () => {
        setStep(0)
        setSuccess(true)
    }

    
    return (
        <OnboardingLayout>
            {step === 1 &&
                <div className='flex flex-col h-full justify-center w-full mt-4'>
                    <h7 className="font-bold text-4xl text-left">Forgot Password</h7>
                    <p className='mt-6 text-base font-medium leading-normal text-[#7A7878]'>Enter your email below to reset password</p>

                    <div className='mt-4'>
                        <InputField
                            label={"Email"}
                        />
                    </div>
                    <div className='mt-6'>
                        <Button
                            text='Submit'
                            onClick={() => setStep(2)}
                        />

                    </div>

                    <div className='mt-10'>
                        <p className='text-center text-[#7A7878] text-base mt-2 font-medium'> Don’t have an account? <span className='font-bold cursor-pointer' onClick={goToSignupPage}>Sign In </span></p>

                    </div>


                </div>}
            {step === 2 &&
                <div className='flex flex-col h-full justify-center w-full mt-4'>
                    <h7 className="font-bold text-4xl text-left">Forgot Password</h7>
                    <p className='mt-6 text-base font-medium leading-normal text-[#7A7878]'>Enter your email below to reset password</p>

                    <div className='mt-4'>
                        <InputField
                            label={"New Password"}
                            showIcon={true}
                            icon={PasswordIcon}
                        />
                        <InputField
                            label={"Re-enter Password"}
                            showIcon={true}
                            icon={PasswordIcon}
                        />
                    </div>
                    <div className='mt-6'>
                        <Button
                            text='Submit'
                            onClick={submitNewPassword}
                        />

                    </div>

                    <div className='mt-10'>
                        <p className='text-center text-[#7A7878] text-base mt-2 font-medium'> Don’t have an account? <span className='font-bold cursor-pointer' onClick={goToSignupPage}>Sign In </span></p>

                    </div>


                </div>
            }
            {success && 
             <div className='flex flex-col items-center mt-10 lg:mt-0'>
             <img src={SuccessIcon} className="w-[100px] h-[100px]" />
             <p className='text-base mt-6 font-bold text-center'>Password reset successful</p>
             <p className='text-sm text-[#7A7878] text-center mt-2'>Your password has been reset successfully. You can now login.</p>
             <div className='mt-10 w-full'>
             <Button
                 text={"Go to Login"}
                 onClick={goToSigninPage}
             />
             </div>

         </div>
            }
        </OnboardingLayout>
    )
}

export default ResetPassword