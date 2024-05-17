import React, { useState } from 'react';
import OnboardingLayout from '../../layout/OnboardingLayout';
import Button from '../../library/Button/Button';
import InputField from '../../library/InputField/InputField';
import EmailIcon from '../../assets/la-icons/email-icon.svg';


function ResetPassword() {
    const [formData, setFormData] = useState({
        email: '',
    });
    const [emailError, setEmailError] = useState('');

    const handleUserInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleVerify = () => {
        // Validate email
        if (!validateEmail(formData.email)) {
            setEmailError('Invalid email');
            return;
        }
        
        // Clear any previous errors
        setEmailError('');

        // If validations pass, proceed with verification process

    };

    // Function to validate email format
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    return (
        <OnboardingLayout link="/login" text="login">
            <div className='border-2 border-[#F29254] h-full rounded-3xl w-full bg-opacity-30 backdrop-filter backdrop-blur-lg justify-center px-12 py-16'>
                <h2 className='text-2xl text-center text-[#F29254] font-semibold'>Enter Code</h2>
                <p className='mt-4 text-center text-lg'>Enter the 6 digit code we sent to your email to reset your password</p>
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
                    {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                </div>
                <div className='mt-20 mb-32'>
                    <div className='max-w-[70%] m-auto'>
                        <Button
                            text='Verify'
                            onClick={handleVerify}
                            disabled={!formData.email || emailError} // Disable button if email is empty or there is an error
                        />
                    </div>
                </div>
            </div>
        </OnboardingLayout>
    )
}

export default ResetPassword;
