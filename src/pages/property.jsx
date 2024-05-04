import React from 'react';
import HeroPage from '../components/PropertyType/HeroPage';
import AppLayout from '../layout/AppLayout';
import WelcomeSection from '../components/PropertyType/WelcomePage';
import Image from "../assets/la-images/home-page.svg";
import { useNavigate } from 'react-router-dom';
import ExploreApartments from '../components/PropertyType/ExploreApartments';
import OurServices from '../components/PropertyType/OurServices';
import WhyChooseUs from '../components/PropertyType/WhyChooseUs';

function PropertyPage() {
    const navigate = useNavigate()
    const goHome = () => navigate("/properties")
    return (
        <AppLayout>
            <HeroPage />
            <WelcomeSection />
            <OurServices />
            <Footer/>
        </AppLayout>
    )
}

export default PropertyPage