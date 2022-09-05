import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import React from "react";
import { useState, useEffect } from 'react';

const NavBar = () => {

  const [adminDropDown, setadminDropDown] = useState(false);
  const [mobileNavOpen, setmobileNavOpen] = useState(false);

  const handleClick = () => {
    if (adminDropDown === false) {
      setadminDropDown(true)
    }
    else {
      setadminDropDown(false)
    }
  };



  return (
    <div>
      <nav className={`bg-gray-800  ${mobileNavOpen ? "" : "rounded-b-md"
        }`}>
        {/* TAB & DESKTOP MENU */}
        <div className="hidden sm:flex  justify-between items-center ">
          <div className="text-slate-50 flex flex-1 h-16 items-center mx-6">
            <div>
              <img className="block  h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&amp;shade=500" alt="Workflow" />
            </div>
            <div className="mx-5">
              <a href="#" className="focus:bg-slate-900 focus:text-teal-200 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>

              <a href="#" className="text-gray-300 focus:bg-slate-900 focus:text-teal-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Customers</a>

              <a href="#" className="text-gray-300 focus:bg-slate-900 focus:text-teal-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Orders</a>

            </div>
          </div>

          <div className="flex text-slate-50 mx-6 items-center cursor-pointer">
            <svg className="h-6 w-6 mr-5 " x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
            </svg>
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""
              onClick={handleClick}
            >
            </img>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className=" sm:hidden space-x-18  flex justify-around items-center h-16">
          <MenuRoundedIcon color="primary" fontSize="medium"
            onClick={() => {
              setmobileNavOpen(!mobileNavOpen)
            }}
            className=" hover:ring-2 rounded-md cursor-pointer" />

          <div className="pl-10">
            <img className=" h-8 w-12 justify-center" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&amp;shade=500" alt="Workflow" />
          </div>

          <div className="flex text-slate-50 items-center cursor-pointer">
            <svg className="h-6 w-6 mr-5 " x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
            </svg>
            <img onClick={handleClick} className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""></img>
          </div>
        </div>
      </nav>

      {/* PERSONAL SETTINGS */}
      {
        adminDropDown && <div className="text-white absolute right-0 z-10  w-48 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none " role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
          <a href="#" className="block px-4 py-2 text-sm  focus:bg-slate-500 focus:text-white" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
          <a href="#" className="block px-4 py-2 text-sm  focus:bg-slate-500 focus:text-white" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
          <a href="#" className="block px-4 py-2 text-sm  focus:bg-slate-500 focus:text-white" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
        </div>

      }

      {/* MOBILE NAV MENU */}
      {mobileNavOpen &&
        <div className={`bg-gray-800 
      text-white  flex flex-col
      items-center sm:hidden ease-in-out duration-300
      ${mobileNavOpen ? "translate-y-0 " : "translate-y-full"}
      ${mobileNavOpen ? "rounded-b-md" : " "}`}>
          <a href="#" className='mt-4 w-96 text-center  focus:ring 
        rounded ring-offset-4 ring-offset-gray-800
        active:text-teal-400 focus:text-teal-400
        ' >Home</a>
          <a href="#" className='mt-4 w-96 text-center  focus:ring 
        rounded ring-offset-4 ring-offset-gray-800
        active:text-teal-400 focus:text-teal-400'>Customer</a>
          <a href="#" className='mt-4 mb-4 w-96 text-center  focus:ring 
        rounded ring-offset-4 ring-offset-gray-800 
         active:text-teal-400 focus:text-teal-400'>Order</a>
        </div>
      }
    </div>
  )
};
export default NavBar;
