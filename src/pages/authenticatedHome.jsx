import React from 'react';
import HeroPage from '../components/AuthenticatedHome/HeroPage';
import AppLayout from '../layout/AppLayout';
import WelcomeSection from '../components/AuthenticatedHome/WelcomePage';
import { useNavigate } from 'react-router-dom';
import OurServices from '../components/AuthenticatedHome/OurServices';
import Footer from '../components/Footer';

function AuthenticatedHome() {
    const navigate = useNavigate()
    const goHome = () => navigate("/properties")
    return (
        <AppLayout>
            <HeroPage />
            <WelcomeSection />
            <OurServices />
            <Footer showEmail={false}/>
        </AppLayout>
    )
}

export default AuthenticatedHome