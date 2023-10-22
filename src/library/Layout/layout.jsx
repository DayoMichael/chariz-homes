import React, { useState } from 'react';
import PropTypes from "prop-types";
import { LayoutStyles } from './LayoutStyles';
import MezoAdminImage from "../../assets/images/dashboard/admin-dashboard-logo.svg";
import DashboardIcon from "../../assets/icons/dashboard/dashboard-icon.svg";
import DashboardActiveIcon from "../../assets/icons/dashboard/dashboard-active-icon.svg";
import CustomersIcon from "../../assets/icons/dashboard/customers-icon.svg";
import CustomersActionIcon from "../../assets/icons/dashboard/customers-active-icon.svg";
import OrdersIcon from "../../assets/icons/dashboard/order-icon.svg";
import OrdersActiveIcon from "../../assets/icons/dashboard/orders-active-icon.svg";
import ArrowIcon from "../../assets/icons/dashboard/arrow-icon.svg"
import LoansIcon from "../../assets/icons/dashboard/loans-icon.svg";
import LoansActiveIcon from "../../assets/icons/dashboard/loans-active-icon.svg";
import RevenueIcon from "../../assets/icons/dashboard/revenue-icon.svg";
import RevenueActiveIcon from "../../assets/icons/dashboard/revenue-active-icon.svg";

import AdminIcon from "../../assets/icons/dashboard/admin-icon.svg";
import AdminActiveIcon from "../../assets/icons/dashboard/admin-active-icon.svg";
import PermissionsIcon from "../../assets/icons/dashboard/permissions-icon.svg";
import PermissionsActiveIcon from "../../assets/icons/dashboard/permissions-active-icon.svg";
import { useLocation, useNavigate } from 'react-router-dom';

function Layout({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("");

  const Navbar = [
    {
      icon: DashboardIcon,
      activeIcon: DashboardActiveIcon,
      name: "Dashboard",
      route: "/dashboard"
    },
    {
      icon: CustomersIcon,
      activeIcon: CustomersActionIcon,
      name: "Customers",
      route: "/dashboard/customers",
      key: "customers"
    },
    {
      icon: OrdersIcon,
      activeIcon: OrdersActiveIcon,
      name: "Orders",
      route: "/dashboard/orders",
      key: "orders"
    },
    // {
    //   icon: RegionsIcon,
    //   activeIcon: RegionsIcon,
    //   name: "Regions",
    //   route: "/dashboard/regions"
    // }
  ]
  const SubNavBar = [
    {
      name: "FINANCE",
      subList: [
        {
          icon: RevenueIcon,
          activeIcon: RevenueActiveIcon,
          name: "Revenue",
          // route: "/dashboard/revenue",
        },
        {
          icon: LoansIcon,
          activeIcon: LoansActiveIcon,
          name: "Loans",
          // route: "/dashboard/loans"
        },
      ]
    },
    // {
    //   name: "MARKETING",
    // },
    // {
    //   name: "BUSINESS & INVENTORY",
    // },
    // {
    //   name: "PRODUCT MANAGEMENT",
    // },
    {
      name: "SYSTEM SETTINGS",
      subList: [
        {
          icon: AdminIcon,
          activeIcon: AdminActiveIcon,
          name: "Admin Profiles",
          // route: "/dashboard/revenue"
        },
        {
          icon: PermissionsIcon,
          activeIcon: PermissionsActiveIcon,
          name: "Permissions",
          // route: "/dashboard/loans"
        },
      ]
    },
  ]

  const toggleAction = (name) => {
    if(name === activeTab){
      setActiveTab("")
      return
    }
    setActiveTab(name)
  }

  const routeTo = (link) => {
    navigate(link)
  }
  return (
    <LayoutStyles className='bg-darkGreen font-lota h-screen'>
      <div className='hidden sm:flex w-[299px] sidebar rounded-tr-2xl rounded-br-2xl p-[20px] flex-col bg-[#32454C]'>
        <div><img src={MezoAdminImage} alt={"mezo admin image"} /></div>
        <div className='mt-8 flex flex-col '>
          <p className='text-left text-xs text-[#CCC] p-2'>MAIN</p>
          <div className='mt-2'>
            {Navbar.map((item, index) => {
              const active = pathname !== "/dashboard" ? pathname.includes(item.key) : item.route === pathname
              return (
                <div onClick={() => routeTo(item?.route)} key={index} className={`p-2.5 flex items-center cursor-pointer rounded ${active ? "active-tab" : ""}`}>
                  <img src={active ? item.activeIcon : item.icon} className="mr-2" />
                  <p className='text-base'>{item.name}</p>
                </div>
              )
            })}
          </div>
          <div className='mt-8 space-y-4'>
            {SubNavBar.map((item, index) => {
              return (
                <div className={`flex flex-col p-2 ${activeTab === item.name ? "rounded bg-[#2C3E44]" : ""}`} key={index}>
                  <div className='flex justify-between' >
                    <p className='text-xs text-[#CCCCCC]'>{item.name}</p>
                    <img src={ArrowIcon} alt="arrow icon cursor-pointer" className='w-[14px]' onClick={() => toggleAction(item.name)} />
                  </div>
                  {activeTab === item.name &&
                    <div className='gap-1 mt-2'>
                      {item.subList.map((itm, idx) => {
                        const active = itm.route === pathname
                        return (
                          <div className='flex flex-col gap-1' key={idx}>
                            <div onClick={() => routeTo(itm?.route)} className={`py-2.5 flex items-center cursor-pointer rounded ${active ? "active-tab" : ""}`}>
                              <img src={active ? itm.activeIcon : itm.icon} className="mr-2 w-[17px]" />
                              <p className='text-sm'>{itm.name}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  }
                </div>
              )
            })}

          </div>

        </div>
      </div>
      <div className='w-full h-full overflow-x-scroll p-4 md:p-7'>
        {children}
      </div>
    </LayoutStyles>
  )
}


export default Layout

Layout.propTypes = {
  children: PropTypes?.any,
};
