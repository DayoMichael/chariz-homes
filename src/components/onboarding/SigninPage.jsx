import React from 'react';
import OnboardingLayout from '../../library/OnboardingLayout/OnboardingLayout';
import InputField from '../../library/InputField/InputField';
import Button from '../../library/Button/Button';
import { useNavigate } from 'react-router-dom';

function SigninPage() {
  const navigate = useNavigate()

  const goToSignupPage = () => {
    navigate("/signup")
  }
  return (
    <OnboardingLayout>
      <div className='flex flex-col h-full justify-center w-full mt-4'>
        <h7 className="font-bold text-4xl text-left">Sign In</h7>
        <p className='mt-6 text-base font-medium leading-normal text-[#7A7878]'>Already have an account with us, enter your details below to log in.</p>
    
        <div className='mt-4'>
          <InputField
            label={"Email"}
          />
          <InputField
            label={"Password"}
          />
        </div>
        <div className='mt-6'>
          <Button
            text='Login'
          />
          <p className='text-right text-[#7A7878] text-sm mt-2 font-medium cursor-pointer'>Forgot password?</p>
        </div>

        <div className='mt-10'>
          <p className='text-center text-[#7A7878] text-base mt-2 font-medium'> Don’t have an account? <span className='font-bold cursor-pointer' onClick={goToSignupPage}>Sign Up</span></p>

        </div>


      </div>
    </OnboardingLayout>
  )
}

export default SigninPage