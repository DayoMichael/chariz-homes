import React from 'react';
import Cookies from 'js-cookie'
import { useLocation, useNavigate } from 'react-router-dom';
import CharizHomesLogo from "../assets/la-icons/homes-logo.svg";
import SearchIcon from "../assets/la-icons/search-icon.svg";
import ProfileIcon from "../assets/la-icons/big-profile-icon.svg";

function AppLayout({ children }) {
    const navigate = useNavigate()
    const location = useLocation();

    const loggedIn = Cookies.get("LacharizToken")
    const navLinks = [
        { name: 'Home', link: '/' },
        { name: 'Services', link: '/services' },
        { name: 'About Us', link: '/about' },
        { name: 'Contact Us', link: '/contact' },
        { name: 'Our App', link: '/app' },
    ];
    const authenticatedNavLinks = [
        { name: 'Home', link: '/' },
        { name: 'Property Management', link: '/property-management' },
        { name: 'Pickup & Dropoff', link: '/pickup' },
        { name: 'Tour Guide', link: '/tour' },
        { name: 'Services', link: '/services' },
        { name: 'Our App', link: '/app' },
    ];

    const nav = authenticatedNavLinks 

    const goTo = (link) => {
        navigate(link)
    }
    return (
        <div className='w-full h-full flex flex-col font-comfortaa '>
            <div className='w-full px-10 md:px-20 justify-center items-center flex fixed bg-[#fff] z-50 justify-between'> {/* Ensure this navbar is above other content */}
                <div className='w-1/7'>
                    <img src={CharizHomesLogo} />
                </div>
                <div className='w-5/7 gap-20 flex items-center justify-end'>
                    <div className='hidden xl:flex gap-6'>
                        {nav.map((navItem, index) => (
                            <div
                                key={index}
                                className={` text-xs ${location?.pathname === navItem.link ? 'border-2 border-[#F29254] rounded-full px-4 py-2 text-[#F29254]' : 'mt-2'} cursor-pointer`}
                            >
                                <a className={`${navItem.name === "Our App" || location?.pathname === navItem.link ? 'text-[#F29254]' : 'text-[#000]' } text-xs` } onClick={() => goTo(navItem.link)}>
                                    {navItem.name}
                                </a>
                            </div>
                        ))}
                    </div>
                    

                </div>
                <div className='w-1/7'>
                {!loggedIn ?
                        <div className='flex gap-4 justify-end text-sm'>
                            <button className='rounded-3xl border border-2 border-[#F29254] font-semibold text-sm py-2 px-8 text-[#F29254] flex justify-center items-center' onClick={() => goTo("/signup")}>
                                Sign up
                            </button>
                            <button className='floating-button rounded-3xl bg-[#F29254] font-semibold text-sm py-2 px-8 text-[#fff] flex justify-center items-center' onClick={() => goTo("/login")}>
                                Login
                            </button>
                        </div>
                        : <div className='flex gap-4 justify-end'>
                            <img src={SearchIcon} />
                            <img src={ProfileIcon} />
                        </div>
                    }
                </div>
            </div>
            <div className='flex flex-col w-full'>
                {children}
            </div>
        </div>
    )
}

export default AppLayout;
