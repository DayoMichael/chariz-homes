import React from 'react';
import { useLocation } from 'react-router-dom';
import CharizHomesLogo from "../assets/la-icons/homes-logo.svg"

function AppLayout({ children }) {
    const location = useLocation();
    const navLinks = [
        { name: 'Home', link: '/' },
        { name: 'Properties', link: '/properties' },
        { name: 'About Us', link: '/about' },
        { name: 'Contact Us', link: '/contact' },
        { name: 'Services', link: '/services' },
        { name: 'Our App', link: '/app' },
        
    ];
    return (
        <div className='w-full h-full flex flex-col font-comfortaa z-100'>
            <div className='w-full px-10 md:px-20 flex fixed bg-[#fff]'>
                <div className='w-1/5'>
                    <img src={CharizHomesLogo} />
                </div>
                <div className='w-4/5 gap-40 flex items-center justify-center'>
                    <div className='flex gap-8'>
                        {navLinks.map((navItem, index) => (
                            <div
                                key={index}
                                className={` text-md ${location.pathname === navItem.link ? 'nav-item active' : 'nav-item'}`}
                            >
                                <a href={navItem.link} style={{ color: location.pathname === navItem.link ? 'text-[#F29254]' : 'text-[#000]' }}>
                                    {navItem.name}
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className='flex gap-4 justify-end'>
                        <button className='rounded-3xl border border-2 border-[#F29254] font-semibold text-lg py-2 px-8 text-[#F29254] flex justify-center items-center'>
                            Sign up
                        </button>
                        <button className='floating-button rounded-3xl bg-[#F29254] font-semibold text-lg py-2 px-8 text-[#fff] flex justify-center items-center'>
                           Login
                        </button>

                    </div>
                </div>
            </div>
            <div className='flex  flex-col w-full'>
            {children}
            </div>
            
        </div>

    )
}

export default AppLayout