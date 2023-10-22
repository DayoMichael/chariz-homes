import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import UploasImagePlaceholder from '../../assets/images/upload-image-placeholder.svg';
import CancelIcon from '../../assets/icons/cancel-icon.svg';

function FileUploader({ label, labelCenter, selectFile, disabled, ...rest }) {
    const inputRef = useRef(null);
    const [fileSelected, setFileSelected] = useState("");

    const handleInput = (fileInput) => {
        const reader = new FileReader();
        const file = fileInput.target.files[0];
        reader.readAsDataURL(file);
        reader.onload = () => {
            setFileSelected(reader.result);
        };
        setFileSelected(fileInput)
        selectFile(fileInput)
    }

    const clearFile = () => {
        setFileSelected("")
        selectFile("")
    }

    console.log(fileSelected, "fileSelected")
    return (
        <Styles>
             <p className={`text-lg label ${labelCenter ? "text-center w-full" : ""}`}>{label}</p>
            <div className='mt-2 w-full input-field flex flex-col justify-center'>
               
                <span className='w-full flex justify-center flex-col relative items-center cursor-pointer'>
                    <input
                        type="file"
                        className=' mt-2 w-full text-left opacity-0 z-10 h-full absolute'
                        ref={inputRef}
                        accept="image/jpg, image/png, image/jpeg, application/pdf, .pdf"
                        onChange={handleInput}
                        disabled={disabled}
                        {...rest}
                    />
                    {fileSelected ?
                        <div>
                            <div className='flex absolute right-0 -top-4 z-20' onClick={clearFile} >
                                <img src={CancelIcon}/>
                            </div>
                            <img src={fileSelected} className="w-[140px] h-[70px]" />   
                        </div>
                        
                        :
                        <div className='flex flex-col items-center'>
                            <img src={UploasImagePlaceholder} className="w-[64px] h-[48px]" />
                            <p className='text-center mt-2 text-sm text-[#7A7878]'>Click here to upload</p>
                        </div>
                    }
                </span>

            </div>
        </Styles>
    )
}

export default FileUploader;

const Styles = styled.div`
    width: 100%;
    margin-top: 18px;
    .input-field{
        border-radius: 8px;
        border: 1px solid #D9D9D9;
        background: #ffffff;
        padding: 16px;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        min-height: 133px;
    }
    .label {
        color: #000000;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
    }
`

FileUploader.propTypes = {
    label: PropTypes?.string?.isRequired,
    placeholder: PropTypes?.string,
    value: PropTypes?.string,
    selectFile: PropTypes?.func?.isRequired,
    labelCenter: PropTypes?.bool,
    disabled: PropTypes?.bool,
};