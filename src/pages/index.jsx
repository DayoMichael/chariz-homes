import React from 'react';
import HeroPage from '../components/Home/HeroPage';
import AppLayout from '../layout/AppLayout';
import WelcomeSection from '../components/Home/WElcomePage';
import Image from "../assets/la-images/home-page.svg";
import { useNavigate } from 'react-router-dom';
import ExploreApartments from '../components/Home/ExploreApartments';
import OurServices from '../components/Home/OurServices';
import WhyChooseUs from '../components/Home/WhyChooseUs';

function HomePage() {
    const navigate = useNavigate()
    const goHome = () => navigate("/properties")
    return (
        <AppLayout>
            <HeroPage />
            <WelcomeSection />
            <ExploreApartments />
            <OurServices />
            <WhyChooseUs />

        </AppLayout>
    )
}

export default HomePage