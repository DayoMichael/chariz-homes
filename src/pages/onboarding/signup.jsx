import React, { useState } from 'react';
import OnboardingLayout from '../../layout/OnboardingLayout';
import InputField from '../../library/InputField/InputField';
import EmailIcon from '../../assets/la-icons/email-icon.svg';
import LockIcon from '../../assets/la-icons/lock-icon.svg';
import Button from '../../library/Button/Button';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [formValidations, setFormValidations] = useState({
    emailValid: false,
    passwordValid: false,
    confirmPasswordValid: false
  });

  const goToNext = () => navigate("/otp")

  const handleUserInput = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'email') {
      setFormValidations({
        ...formValidations,
        emailValid: validateEmail(value)
      });
    } else if (name === 'password') {
      setFormValidations({
        ...formValidations,
        passwordValid: validatePassword(value)
      });
    } else if (name === 'confirmPassword') {
      setFormValidations({
        ...formValidations,
        confirmPasswordValid: validateConfirmPassword(value)
      });
    }
  };

  const validateEmail = (email) => {
    // Basic email validation
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    // Password validation (example: minimum length of 6 characters)
    return password.length >= 6;
  };

  const validateConfirmPassword = (confirmPassword) => {
    // Validate if confirmPassword matches password
    return confirmPassword === formData.password;
  };

  const isFormValid = () => {
    const { emailValid, passwordValid, confirmPasswordValid } = formValidations;
    return emailValid && passwordValid && confirmPasswordValid;
  };

  return (
    <OnboardingLayout link="/" text="home">
      <div className='border-2 border-[#F29254] rounded-3xl w-full bg-opacity-30 backdrop-filter backdrop-blur-lg justify-center px-12 py-10'>
        <h2 className='text-2xl text-center text-[#F29254] font-semibold'>Signup</h2>
        <p className='mt-4 text-center text-lg'>Hey there, pick up where you left off</p>
        <div className='mt-8 flex flex-col gap-4'>
          <InputField
            label={"Enter your email"}
            name="email"
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={handleUserInput}
            showIcon
            icon={EmailIcon}
          />
          <InputField
            label={"Create Password"}
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleUserInput}
            showIcon
            icon={LockIcon}
          />
          <InputField
            label={"Confirm Password"}
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleUserInput}
            showIcon
            icon={LockIcon}
          />
        </div>
        <div className='mt-10'>
          <div className='max-w-[70%] m-auto'>
            <Button
              text='Signup'
              disabled={!isFormValid()}
              onClick={goToNext}
            />
          </div>
          <p className='text-lg text-center mt-16'>  Already have an account? <span className='text-[#F29254] cursor-pointer'>Login</span></p>
        </div>
      </div>
    </OnboardingLayout>
  );
}

export default Signup;
