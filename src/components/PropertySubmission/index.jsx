import React, { useState } from 'react';
import { styled } from 'styled-components';
import InputField from '../../library/InputField/InputField';
import BackIcon from "../../assets/la-icons/back-icon.svg";
import ImageIcon from "../../assets/la-icons/input-image.svg";
import Footer from '../Footer';
import Button from '../../library/Button/Button';
import { useNavigate } from 'react-router-dom';

function SubmissionView() {
    const navigate = useNavigate()
    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };

    const triggerFileInput = () => {
        document.getElementById('fileInput').click();
    };
    return (
        <Styled>
            <div className='bg-[#ECECEC] mt-20 min-h-screen'>
                <div className='flex flex-col w-full max-w-[90%] m-auto py-20 h-full'>
                    <div className='flex justify-between'>
                        <img src={BackIcon} className="cursor-pointer w-[50px] md:w-[60px]" alt="Back" onClick={() => navigate("/property-management")} />
                        <h2 className='text-4xl font-bold items-center text-center flex'>Submit an apartment</h2>
                        <div className='gap-6 opacity-0 border border-[#F29254] px-6 py-2 items-center justify-center bg-[#fff] rounded-full h-fit'></div>
                    </div>
                    <div className='mt-10 gap-6 w-full flex'>
                        <div className='max-w-[48%] w-full flex flex-col gap-2'>
                            <InputField
                                className="border-[#fff]"
                                label="Select a program"
                                placeholder="Select program"
                            />
                            <InputField
                                className="border-[#fff]"
                                label="Property type"
                                placeholder="Enter property type"
                            />
                            <InputField
                                className="border-[#fff]"
                                label="Location/Address"
                                placeholder="Select program"
                            />
                            <InputField
                                className="border-[#fff]"
                                label="When Is the property available for inspection?"
                                placeholder="Select date"
                            />
                            <InputField
                                className="border-[#fff]"
                                label="Your Business Email"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className='max-w-[48%] w-full flex flex-col gap-2'>
                            <InputField
                                className="border-[#fff]"
                                label="Property name"
                                placeholder="Enter property name"
                            />
                            <InputField
                                className="border-[#fff]"
                                label="Number of rooms"
                                placeholder="Enter no of rooms"
                            />
                            <InputField
                                className="border-[#fff]"
                                label="Is the property available for inspection?"
                                placeholder="Yes/No"
                            />
                            <InputField
                                className="border-[#fff]"
                                label="Rate/Night"
                                placeholder="Enter rate"
                            />
                            <InputField
                                className="border-[#fff]"
                                label="Phone number"
                                placeholder="Enter number"
                            />
                        </div>
                    </div>
                    <div className='w-full mt-4'>
                        <p className={`text-lg label text-[#858585]`}>Pictures and/or videos of property</p>
                        <div className='border-dashed border-2 border-[#F29254] bg-[#fff] rounded-3xl h-[197px] justify-center items-center flex flex-col gap-2 cursor-pointer' onClick={triggerFileInput}>
                            <img src={ImageIcon} alt="Browse Files" />
                            <p className='text-sm'>
                                <span className='text-[#F29254] font-bold'>Browse Files</span>{" "}or drag and drop here to upload
                            </p>
                            <input
                                id="fileInput"
                                type="file"
                                multiple
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center mt-10'>
                        <Button
                            className={"w-fit w-[340px]"}
                            text='Submit request'
                        />

                    </div>
                </div>
            </div>
            <Footer />
        </Styled>
    )
}

export default SubmissionView

const Styled = styled.div`
    .input-field {
        border: 2px solid #fff;
        padding: 10px;
        font-size: 14px;
        font-weight: 400;
        margin-top: 2px;
    }
    .label {
        margin-left: 6px;
        font-size: 14px;
    }
`;