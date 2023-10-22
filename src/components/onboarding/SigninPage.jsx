import React, { useState } from 'react';
import Cookies from "js-cookie"
import { useDispatch } from 'react-redux';
import SidebarImage from "../../assets/images/signup/sidebar-image.svg";
import MezoImage from "../../assets/images/signup/mezo-logo.svg";
import InputField from '../../library/InputField/InputField';
import Button from '../../library/Button/Button';
import PoweredByImage from "../../assets/images/signup/powered-by-image.svg";
import CreateProfileImage from "../../assets/images/signup/profile-add-icon.svg";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/features/auth/actions';

function SigninPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [inputField, setInputField] = useState({
    email: "",
    password: ""
  })
  const [loading, setLoading] = useState(false)

  const goToDashboard = () => navigate("/dashboard")
  const goToCreateAccount = () => navigate("/onboard")

  const handleUserInput = (e) => {
    const { name, value } = e.target
    setInputField({
      ...inputField,
      [name]: value
    })
  }

  const login = async () => {
    const { email, password } = inputField
    const payload = {
      email,
      password,
    }
    setLoading(true)
    const { status, data } = await dispatch(loginUser(payload))
    setLoading(false)

    if (status) {
      Cookies.set("MezoAdminToken", data?.token)
      const coded = JSON.stringify(data?.user)
      Cookies.set("MezoAdminSessionInfo", coded)
      goToDashboard()
    }
  }



  return (
    <div className='bg-darkGreen h-screen text-xl font-lota overflow-y-hidden flex'>
      <div className='hidden md:flex h-fit'>
        <img src={SidebarImage} alt="sidebar image" />
      </div>
      <div className='w-full flex justify-center items-center '>
        <div className='p-4 flex flex-col justify-center text-center min-w-[400px]'>
          <img src={MezoImage} alt="mezo image" className='max-h-[150px]' />
          <h5 className='text-3xl font-bold mt-6 text-center'>Mezo Admin App</h5>
          <p className='mt-2'>Please provide your login details</p>
          <div className='mt-4'>
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
              label="Password"
              placeholder={"*********"}
              value={inputField?.password}
              onChange={handleUserInput}
              labelCenter={true}
            />
          </div>
          <div className='mt-10'>
            <Button
              text="Sign Into Dahboard"
              className={"p-20"}
              onClick={login}
              loading={loading}
              disabled={!inputField.email || !inputField.password}
            />
            <Button
              type={"inverted"}
              text={<span className='flex'><img src={CreateProfileImage} className="mr-2"/>Create Admin Profile</span>}
              className={"p-20 mt-4 bg-[#32454C]"}
              onClick={goToCreateAccount}
            />
          </div>

          <div className='flex justify-center items-end mt-10'>
            <img src={PoweredByImage} alt="powered by image" />
          </div>

        </div>

      </div>
    </div>
  )
}

export default SigninPage