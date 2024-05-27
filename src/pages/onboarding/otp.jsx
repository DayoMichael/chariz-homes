import React, { useState, useEffect } from 'react';
import Cookies from "js-cookie"
import OnboardingLayout from '../../layout/OnboardingLayout';
import PinInput from '../../library/Pin/Pin';
import Button from '../../library/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { activateUserAccount } from '../../redux/features/auth/actions';

function OTPView() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [pin, setPin] = useState('');
    const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
    const [isResendDisabled, setIsResendDisabled] = useState(false);
    const activationToken = JSON.parse(Cookies.get("LaCharizHomesActivationToken"))
    const length = 4;

    // Function to handle resend code
    const resendCode = () => navigate("/signup");

    // Format time left for display
    const formattedTimeLeft = `${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`;

    // Function to handle verification
    const handleVerify = async () => {
        // Logic to verify PIN
        const payload = {
            activationCode: pin,
            activationToken,
        }
        setLoading(true)
        const {status, data} = await dispatch(activateUserAccount(payload))
        setLoading(false)
        if(status){
            navigate("/login")
            Cookies.remove("LaCharizHomesActivationToken")
        }
        
 
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
            <div className='border-2 border-[#F29254] h-full rounded-3xl w-full bg-opacity-30 backdrop-filter backdrop-blur-lg justify-center px-10 py-12 max-w-[500px]'>
                <h2 className='text-xl text-center text-[#F29254] font-semibold'>Enter Code</h2>
                <p className='mt-4 text-center text-sm'>Enter the 6 digit code we sent to your email to reset your password</p>
                <div className='mt-20'>
                    <PinInput
                        length={length}
                        onChange={setPin}
                    />
                </div>
                <p className="text-center mt-4 flex flex-col justify-center text-sm">Didn’t receive code? 
                    {timeLeft > 0 ? <p>Resend in <span className='text-[#F29254] mt-2'>{formattedTimeLeft}</span> </p> : (
                        <span className="text-[#F29254] cursor-pointer underline " onClick={() => { setIsResendDisabled(true); setTimeLeft(120); resendCode(); }}>Resend code</span>
                    )}
                </p>
                <div className='mt-20 mb-32'>
                    <div className='max-w-[70%] m-auto'>
                        <Button
                            text='Verify'
                            loading={loading}
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
