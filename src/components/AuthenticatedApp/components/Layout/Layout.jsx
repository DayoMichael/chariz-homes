import React, { useState } from 'react';
import Cookies from "js-cookie"
import PropTypes from "prop-types";
import { LayoutStyles } from './LayoutStyles';
import HorizonLogo from '../../../../assets/icons/horizon-blue-logo.svg';

import DashboardActiveIcon from '../../../../assets/icons/dashboard-active-icon.svg';
import DashboardIcon from '../../../../assets/icons/dashboard-icon.svg';
import LpoActiveIcon from '../../../../assets/icons/lpo-active-icon.svg';
import LpoIcon from '../../../../assets/icons/lpo-icon.svg';
import InvestmentsIcon from '../../../../assets/icons/investments-logo.svg';
import ReportsIcon from '../../../../assets/icons/reports-icon.svg';
import SettingsIcon from '../../../../assets/icons/settings-icon.svg';
import LogoutIcon from '../../../../assets/icons/logout-icon.svg';

import { useLocation, useNavigate } from 'react-router-dom';

function Layout({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("");

  const logout = () => {
    Cookies.remove("HorizonAdminToken")
    navigate("/")

  }

  const Navbar = [
    {
      icon: DashboardIcon,
      activeIcon: DashboardActiveIcon,
      name: "Dashboard",
      route: "/dashboard"
    },
    {
      icon: LpoIcon,
      activeIcon: LpoActiveIcon,
      name: "LPOs",
      route: "/dashboard/lpos",
      key: "lpos"
    },
    {
      icon: InvestmentsIcon,
      activeIcon: InvestmentsIcon,
      name: "Investments",
      route: "/dashboard/investments",
      key: "investments"
    },
    {
      icon: ReportsIcon,
      activeIcon: ReportsIcon,
      name: "Reports",
      route: "/dashboard/reports",
      key: "reports"
    }
  ]

  const BottomNav =[
    {
      icon: SettingsIcon,
      activeIcon: SettingsIcon,
      name: "Settings",
      route: "/dashboard/settings",
      key: "settings"
    },
    {
      icon: LogoutIcon,
      activeIcon: LogoutIcon,
      name: "Logout",
      onClick: logout,
      key: "settings"
    },

  ]


  const toggleAction = (name) => {
    if (name === activeTab) {
      setActiveTab("")
      return
    }
    setActiveTab(name)
  }

  const routeTo = (link) => {
    navigate(link)
  }
  return (
    <LayoutStyles className='bg-[#FFFFFF] h-screen'>
      <div className='hidden sm:flex w-[299px] sidebar rounded-tr-2xl rounded-br-2xl flex-col bg-[#F3F5F7]'>
        <div className=' flex justify-center py-8 px-10'><img src={HorizonLogo} alt={"mezo admin image"} /></div>
        <div className='mt-8 flex flex-col h-full justify-between '>
          
          <div className='mt-2 max-w-[95%] gap-4 flex flex-col'>
            {Navbar.map((item, index) => {
              const active = pathname !== "/dashboard" ? pathname.includes(item.key) : item.route === pathname
              return (
                <div onClick={() => routeTo(item?.route)} key={index} className={`py-4 px-6 flex items-center cursor-pointer rounded rounded-tl-none rounded-bl-none ${active ? "active-tab" : ""}`}>
                  <img src={active ? item.activeIcon : item.icon} className="mr-2" />
                  <p className='text-base font-semibold'>{item.name}</p>
                </div>
              )
            })}
          </div>

          <div className='mb-20 max-w-[95%] gap-4 flex flex-col ab'>
            {BottomNav.map((item, index) => {
              const active = pathname !== "/dashboard" ? pathname.includes(item.key) : item.route === pathname
               console.log(pathname.includes(item.key), pathname, item.key)
              return (
                <div onClick={item.onClick ? () => item.onClick() : () => routeTo(item?.route) } key={index} className={`py-4 px-6 flex items-center cursor-pointer rounded rounded-tl-none rounded-bl-none ${active ? "active-tab" : ""}`}>
                  <img src={active ? item.activeIcon : item.icon} className="mr-2" />
                  <p className='text-base font-semibold'>{item.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='w-full h-full overflow-x-scroll p-2  bg-[#F3F5F7]'>
        {children}
      </div>
    </LayoutStyles >
  )
}


export default Layout

Layout.propTypes = {
  children: PropTypes?.any,
};
