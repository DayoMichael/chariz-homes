import React, { useState } from 'react';
import Cookies from "js-cookie"
import OnboardingLayout from '../../layout/OnboardingLayout';
import InputField from '../../library/InputField/InputField';
import EmailIcon from '../../assets/la-icons/email-icon.svg';
import LockIcon from '../../assets/la-icons/lock-icon.svg';
import Button from '../../library/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/features/auth/actions';

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleUserInput = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmail(value);
            setEmailError(validateEmail(value) ? '' : 'Invalid email');
        } else if (name === 'password') {
            setPassword(value);
            setPasswordError(validatePassword(value) ? '' : 'Password must be at least 6 characters');
        }
    };

    const goToDashboard = () => {
        Cookies.set("LacharizToken", "loggedIn")
        navigate("/")
    }

    const validateEmail = (email) => {
        // Basic email validation
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleLogin = async ()  => {
        const payload = {
            email,
            password,
        }
        setLoading(true)
        const {status, data} = await dispatch(loginUser(payload))
        setLoading(false)
        if(status){
            Cookies.set("LacharizToken", JSON.stringify(data?.accessToken))
            Cookies.set("LacharizUserData", JSON.stringify(data?.user))
            navigate("/")
        }
    }

    const validatePassword = (password) => {
        // Password validation (example: minimum length of 6 characters)
        return password.length >= 6;
    };

    const isFormValid = () => {
        return emailError === '' && passwordError === '';
    };

    return (
        <OnboardingLayout link="/" text={"home"}>
            <div className='border-2 border-[#F29254] h-full rounded-3xl w-full bg-opacity-30 backdrop-filter backdrop-blur-lg justify-center px-10 py-12 max-w-[500px]'>
                <h2 className='text-xl text-center text-[#F29254] font-semibold'>Login</h2>
                <p className='mt-4 text-center text-sm'>Hey there, pick up where you left off</p>
                <div className='mt-8 flex flex-col gap-4'>
                    <InputField
                        className={"text-sm"}
                        label={"Enter your email"}
                        name="email"
                        type="text"
                        placeholder="email"
                        value={email}
                        onChange={handleUserInput}
                        showIcon
                        icon={EmailIcon}
                    />
                    {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                    <InputField
                        className={"text-sm"}
                        label={"Password"}
                        name="password"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={handleUserInput}
                        showIcon
                        icon={LockIcon}
                    />
                    {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                </div>
                <div className='mt-10'>
                    <div className='max-w-[70%] m-auto'>
                        <Button
                            text='Login'
                            loading={loading}
                            disabled={!isFormValid()}
                            onClick={handleLogin}
                        />
                        <p className='text-sm text-[#F29254] text-center mt-2 cursor-pointer'>Forgot Password</p>
                    </div>
                    <p className='text-sm text-center mt-16'>  Don't have an account? <span className='text-[#F29254] cursor-pointer' onClick={() => navigate("/signup")}>Signup</span> instead</p>
                </div>
            </div>
        </OnboardingLayout>
    )
}

export default Login;
