import React, { useState } from 'react';
import OnboardingLayout from '../../layout/OnboardingLayout';
import InputField from '../../library/InputField/InputField';
import EmailIcon from '../../assets/la-icons/email-icon.svg';
import LockIcon from '../../assets/la-icons/lock-icon.svg';
import Button from '../../library/Button/Button';

function Login() {
    const [email, setEmail] = useState('');
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

    const validateEmail = (email) => {
        // Basic email validation
        return /\S+@\S+\.\S+/.test(email);
    };

    const validatePassword = (password) => {
        // Password validation (example: minimum length of 6 characters)
        return password.length >= 6;
    };

    const isFormValid = () => {
        return emailError === '' && passwordError === '';
    };

    return (
        <OnboardingLayout link="/" text={"home"}>
            <div className='border-2 border-[#F29254] h-full rounded-3xl w-full bg-opacity-30 backdrop-filter backdrop-blur-lg justify-center px-12 py-16'>
                <h2 className='text-2xl text-center text-[#F29254] font-semibold'>Login</h2>
                <p className='mt-4 text-center text-lg'>Hey there, pick up where you left off</p>
                <div className='mt-8 flex flex-col gap-4'>
                    <InputField
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
                            disabled={!isFormValid()}
                        />
                        <p className='text-lg text-[#F29254] text-center mt-4 cursor-pointer'>Forgot Password</p>
                    </div>
                    <p className='text-lg text-center mt-16'>  Don't have an account? <span className='text-[#F29254] cursor-pointer'>Signup</span> instead</p>
                </div>
            </div>
        </OnboardingLayout>
    )
}

export default Login;
