import React, { useState } from 'react';
import Cookies from "js-cookie"
import OnboardingLayout from '../../layout/OnboardingLayout';
import InputField from '../../library/InputField/InputField';
import EmailIcon from '../../assets/la-icons/email-icon.svg';
import LockIcon from '../../assets/la-icons/lock-icon.svg';
import Button from '../../library/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUserAccount } from '../../redux/features/auth/actions';

function Signup() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
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

  const handleSubmit = async () => {

    const payload = {
      name: formData?.name,
      email: formData?.email,
      password: formData?.password,
    }
    setLoading(true)
    const {status, data} = await dispatch(createUserAccount(payload))
    setLoading(false)
    if(status){
      Cookies.set("LaCharizHomesActivationToken", JSON.stringify(data?.activation_token))
      console.log(data)
      goToNext()
    }
  }

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
      <div className='border-2 border-[#F29254] rounded-3xl w-full bg-opacity-30 backdrop-filter backdrop-blur-lg justify-center px-10 py-12 max-h-[85%] overflow-y-scroll m-auto max-w-[500px]'>
        <h2 className='text-2xl text-center text-[#F29254] font-semibold'>Signup</h2>
        <p className='mt-2 text-center text-sm'>Hey there, pick up where you left off</p>
        <div className='mt-8 flex flex-col gap-2'>

          <InputField
            className={"text-sm"}
            label={"Enter your name"}
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleUserInput}
            showIcon
            icon={EmailIcon}
          />
          <InputField
            className={"text-sm"}
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
            className={"text-sm"}
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
            className={"text-sm"}
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
              loading={loading}
              text='Signup'
              disabled={!isFormValid()}
              onClick={handleSubmit}
            />
          </div>
          <p className='text-sm text-center mt-16'>  Already have an account? <span className='text-[#F29254] cursor-pointer'>Login</span></p>
        </div>
      </div>
    </OnboardingLayout>
  );
}

export default Signup;
