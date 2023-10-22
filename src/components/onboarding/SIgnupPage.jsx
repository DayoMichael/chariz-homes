import React, { useEffect, useState } from 'react';
import Cookies from "js-cookie"
import { useDispatch } from 'react-redux';
import SidebarImage from "../../assets/images/signup/sidebar-image.svg";
import MezoImage from "../../assets/images/signup/mezo-logo.svg";
import InputField from '../../library/InputField/InputField';
import Button from '../../library/Button/Button';
import PoweredByImage from "../../assets/images/signup/powered-by-image.svg";
import CreateProfileImage from "../../assets/images/signup/profile-add-icon.svg";
import { useNavigate } from 'react-router-dom';
import { createUserAccount, loginUser } from '../../redux/features/auth/actions';

function SignupPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [step, setStep] = useState(1);
  const [disabled, setDisabled] = useState(true)
  const [inputField, setInputField] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstname: "",
    lastname: "",
    phone: "",
  })
  const [loading, setLoading] = useState(false)

  const goToDashboard = () => navigate("/dashboard")

  const handleUserInput = (e) => {
    const { name, value } = e.target
    setInputField({
      ...inputField,
      [name]: value
    })
  }

  const createAccount = async () => {
    if(step === 1 ){
      setStep(2)
      return
    }
    const { email, password, firstname, lastname, phone } = inputField
    const payload = {
      firstname,
      lastname,
      phone,
      email,
      password,
      signup_source: "web",
      user_type: "vendor"
    }
   
    setLoading(true)
    const { status, data } = await dispatch(createUserAccount(payload))
    setLoading(false)

    if (status) {
      // Cookies.set("MezoAdminToken", data?.token)
      // const coded = JSON.stringify(data?.user)
      // Cookies.set("MezoAdminSessionInfo", coded)
      goToDashboard()
    }
  }

  useEffect(() => {
    const { email, password, confirmPassword, firstname, lastname, phone } = inputField
    if(step === 1 && (!email || !password || !confirmPassword)){
      setDisabled(true)
    }else if(step === 2 && (!firstname || !lastname || !phone)){
      setDisabled(true)
    }else{
      setDisabled(false)
    }
  },[inputField])

  return (
    <div className='bg-darkGreen h-screen text-xl font-lota overflow-y-hidden flex'>
      <div className='hidden md:flex h-fit'>
        <img src={SidebarImage} alt="sidebar image" />
      </div>
      <div className='w-full flex justify-center items-center '>
        <div className='p-4 flex flex-col justify-center text-center min-w-[400px]'>
          <img src={MezoImage} alt="mezo image" className='max-h-[150px]' />
          <h5 className='text-3xl font-bold mt-6 text-center'>Mezo Admin App</h5>
          <p className='mt-2'>Create Account</p>
          {step === 1 && <div className='mt-4'>
            <InputField
              name="email"
              label="Email Address"
              placeholder={"abc@gmail.com"}
              value={inputField?.email}
              onChange={handleUserInput}
              labelCenter={true}
            />
            <InputField
              name="password"
              label="Enter Password"
              placeholder={"*********"}
              value={inputField?.password}
              onChange={handleUserInput}
              labelCenter={true}
            />
            <InputField
              name="confirmPassword"
              label="Confirm your password"
              placeholder={"*********"}
              value={inputField?.confirmPassword}
              onChange={handleUserInput}
              labelCenter={true}
            />
          </div>}
          {step === 2 && <div>
            <InputField
              name="firstname"
              label="First Name"
              placeholder={"First Name"}
              value={inputField?.firstname}
              onChange={handleUserInput}
              labelCenter={true}
            />
            <InputField
              name="lastname"
              label="Last Name"
              placeholder={"Last Name"}
              value={inputField?.lastname}
              onChange={handleUserInput}
              labelCenter={true}
            />
            <InputField
              name="phone"
              label="Phone Number"
              placeholder={"Phone Number"}
              value={inputField?.phone}
              onChange={handleUserInput}
              labelCenter={true}
            />
          </div>}
          <div className='mt-10'>
            <Button
              text="Proceed"
              className={"p-20"}
              onClick={createAccount}
              loading={loading}
              disabled={disabled}
            />
            {/* <Button
                type={"inverted"}
                text={<span className='flex'><img src={CreateProfileImage} className="mr-2"/>Create Admin Profile</span>}
                className={"p-20 mt-4"}
              /> */}

          </div>

          <div className='flex justify-center items-end mt-10'>
            <img src={PoweredByImage} alt="powered by image" />
          </div>

        </div>

      </div>
    </div>
  )
}

export default SignupPage