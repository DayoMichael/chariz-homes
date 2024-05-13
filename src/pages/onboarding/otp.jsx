import React, { useState, useEffect } from 'react';
import OnboardingLayout from '../../layout/OnboardingLayout';
import PINInput from '../../library/PinInput/PinInput';
import Button from '../../library/Button/Button';

function OTPView() {
    const [pin, setPin] = useState('');
    const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
    const [isResendDisabled, setIsResendDisabled] = useState(false);
    const length = 6;

    // Function to handle resend code
    const resendCode = () => {
        // Logic to resend code
        console.log('Code resent!');
    };

    // Format time left for display
    const formattedTimeLeft = `${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`;

    // Function to handle verification
    const handleVerify = () => {
        // Logic to verify PIN
        console.log('Verifying PIN:', pin);
    };

    // Countdown timer effect
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setIsResendDisabled(false); // Enable resend button when time expires
        }
    }, [timeLeft]);

    return (
        <OnboardingLayout link="/login" text="login">
            <div className='border-2 border-[#F29254] h-full rounded-3xl w-full bg-opacity-30 backdrop-filter backdrop-blur-lg justify-center px-12 py-16'>
                <h2 className='text-2xl text-center text-[#F29254] font-semibold'>Enter Code</h2>
                <p className='mt-4 text-center text-lg'>Enter the 6 digit code we sent to your email to reset your password</p>
                <div className='mt-20'>
                    <PINInput
                        length={length}
                        onChange={setPin}
                    />
                </div>
                <p className="text-center mt-4 flex justify-center">Didn’t receive code? 
                    {timeLeft > 0 ? <p>Resend in <span className='text-[#F29254]'>{formattedTimeLeft}</span> </p> : (
                        <span className="text-[#F29254] cursor-pointer underline" onClick={() => { setIsResendDisabled(true); setTimeLeft(120); resendCode(); }}>Resend code</span>
                    )}
                </p>
                <div className='mt-20 mb-32'>
                    <div className='max-w-[70%] m-auto'>
                        <Button
                            text='Verify'
                            onClick={handleVerify}
                            disabled={!pin || pin.length !== length} // Disable button if PIN is not complete
                        />
                    </div>
                </div>
            </div>
        </OnboardingLayout>
    );
}

export default OTPView;
