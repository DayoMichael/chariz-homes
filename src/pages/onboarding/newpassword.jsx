import React, { useState } from 'react';
import OnboardingLayout from '../../layout/OnboardingLayout';
import InputField from '../../library/InputField/InputField';
import CheckIcon from '../../assets/la-icons/check-icon.svg';
import LockIcon from '../../assets/la-icons/lock-icon.svg';
import Button from '../../library/Button/Button';

function NewPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordValidations, setPasswordValidations] = useState({
        minLength: false,
        hasNumber: false,
        hasSpecialChar: false,
        hasUpperCase: false,
    });
    const [passwordsMatch, setPasswordsMatch] = useState(false);

    const handleUserInput = (e) => {
        const { name, value } = e.target;
        if (name === 'password') {
            setPassword(value);
            validatePassword(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
            setPasswordsMatch(value === password);
        }
    };

    const validatePassword = (password) => {
        const validations = {
            minLength: password.length >= 8,
            hasNumber: /\d/.test(password),
            hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
            hasUpperCase: /[A-Z]/.test(password),
        };
        setPasswordValidations(validations);
    };

    const isFormValid = () => {
        return Object.values(passwordValidations).every(validation => validation) && passwordsMatch;
    };

    return (
        <OnboardingLayout>
            <div className='border-2 border-[#F29254] h-full rounded-3xl w-full bg-opacity-30 backdrop-filter backdrop-blur-lg justify-center px-10 py-16'>
                <h2 className='text-2xl text-center text-[#F29254] font-semibold'>Create New Password</h2>
                <p className='mt-4 text-center text-lg'>Hey there, pick up where you left off</p>
                <div className='mt-6 flex flex-col gap-4'>
                    <InputField
                        label={"New Password"}
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleUserInput}
                        showIcon
                        icon={LockIcon}
                    />
                    <InputField
                        label={"Confirm New Password"}
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleUserInput}
                        showIcon
                        icon={LockIcon}
                    />
                </div>
                <div className='mt-6'>
                    <div className='max-w-[70%] m-auto'>
                        <Button
                            text='Create New Password'
                            disabled={!isFormValid()}
                        />
                    </div>
                    <div className='text-lg text-center mt-6 max-w-[70%] m-auto'>
                        Your password must contain:
                        <div className='flex gap-4 flex-col justify-between mt-4'>
                            <Checkbox checked={passwordValidations.minLength}>At least 8 characters</Checkbox>
                            <Checkbox checked={passwordValidations.hasNumber}>At least one number</Checkbox>
                            <Checkbox checked={passwordValidations.hasSpecialChar}>At least one special character</Checkbox>
                            <Checkbox checked={passwordValidations.hasUpperCase}>At least one uppercase letter</Checkbox>
                            <Checkbox checked={passwordsMatch}>Passwords match</Checkbox>
                        </div>
                        
                    </div>
                </div>
            </div>
        </OnboardingLayout>
    );
}

const Checkbox = ({ checked, children }) => {
    return (
        <div className='flex items-center'>
            <div className={`w-6 h-6 rounded-lg border-2 border-[#F29254] flex justify-center items-center mr-2 ${checked ? 'bg-[#F29254]' : ''}`}>
                {checked && <img src={CheckIcon} alt="Check Icon" className="w-4 h-4" />}
            </div>
            <p>{children}</p>
        </div>
    );
};

export default NewPassword;
