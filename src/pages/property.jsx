import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from "../assets/la-images/property-type-page.svg";

function PropertyPage() {
    const navigate = useNavigate()
    const goHome = () => navigate("/")
    return (
        <div onClick={goHome} className="cursor-pointer">
            <img src={Image} />
        </div>
    )
}

export default PropertyPage