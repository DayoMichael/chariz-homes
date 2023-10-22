import React, { useState } from 'react';
import OnboardingLayout from '../../library/OnboardingLayout/OnboardingLayout';
import InputField from '../../library/InputField/InputField';
import Button from '../../library/Button/Button';
import { useNavigate } from 'react-router-dom';
import PersonalInvestorIcon from "../../assets/icons/personal-investor-icon.svg";
import InstitutionalInvestorIcon from "../../assets/icons/institutional-investor-icon.svg";
import DotIcon from '../../assets/icons/dot-icon.svg';

function SignupPage() {
  const navigate = useNavigate();
  const [investorType, setInvestorType] = useState("personal") 

  const goToSigninPage = () => {
    navigate("/")
  }

  const goToAboutPage = () => {
    navigate(`/about?type=${investorType}`)
  }

  const InvestorTypes = [
    {
      type: "personal",
      name: "Personal Investor",
      icon: PersonalInvestorIcon,
    },
    {
      type: "institution",
      name: "Institutional Investor",
      icon: InstitutionalInvestorIcon,
    }
  ]
  return (
    <OnboardingLayout>
      <div className='flex flex-col w-full mt-4'>
        <h7 className="font-bold text-4xl text-left">Create Account</h7>
        <p className='mt-6 text-base font-medium leading-normal text-[#7A7878]'>Create an investor account to start trading.</p>
        <div className='md:flex justify-between gap-4 mt-5 space-y-2 md:space-y-0'>
          {InvestorTypes.map((item, index) => {
            const active = item?.type === investorType
            return (
            <div key={index} className={`rounded-lg p-4 border border  w-full cursor-pointer ${active ? "border-[#119B38]": "border-[#D9D9D9]"}`} onClick={() => setInvestorType(item.type)}>
              <div className='flex justify-between'>
                <img src={item?.icon} />
               {active &&  <div className='flex items-start'>
                  <img src={DotIcon} />
                </div>}
              </div>
              <p className='text-sm font-medium mt-2'>{item?.name}</p>

            </div>)}
          )}
        </div>
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
            text='Next'
            onClick={goToAboutPage}
          />
        </div>

        <div className='mt-5'>
          <p className='text-center text-[#7A7878] text-base mt-2 font-medium'> Already have an account? <span className='font-bold cursor-pointer' onClick={goToSigninPage}>Sign In</span></p>

        </div>


      </div>
    </OnboardingLayout>
  )
}

export default SignupPage