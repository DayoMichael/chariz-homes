import React from 'react';
import OnboardingLayout from '../../../library/OnboardingLayout/OnboardingLayout';
import { useLocation, useNavigate } from 'react-router-dom';
import PersonalInvestor from './PersonalInvestor';
import InstitutionalInvestor from './institutionalInvestor';

function AboutPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const type = new URLSearchParams(location.search).get("type")

  const goToSignupPage = () => {
    navigate("/signup")
  }
  return (
    <OnboardingLayout>
      {type === "personal" && <PersonalInvestor />}
      {type === "institution" && <InstitutionalInvestor />}
      
    </OnboardingLayout>
  )
}

export default AboutPage