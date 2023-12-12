import React, { useState } from 'react';
import { NavbarData } from './Data/NavbarData'
import { AiOutlineSearch } from 'react-icons/ai'
import Og from '../../Assets/images/og.png'
import { Link, useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar() {
    const location = useLocation();
    const active = location.pathname
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
   
  return (
    <div className='px-[5px] xl:px-[120px] lg:px-[120px] fixed z-[1] w-full bg-white'>
        <div className='py-[5px]'>
            <img className='w-[80px]' src={Og} alt='news' />
        </div>
        <div>
            <div className='bg-[#1b2227] lg:flex xl:flex justify-between xl:px-[20px]'>
                <div className='cursor-pointer px-2 py-2 lg:hidden xl:hidden' onClick={toggleMenu}>
                <GiHamburgerMenu className='text-white text-[30px]' />
                </div>
                {(window.innerWidth > 1080 || isMenuOpen) && (
                    <div className='grid grid-cols-1 lg:flex xl:flex text-[#f5f5f5]  font-[Poppins] text-[15px] text-[uppercase]'>
                    {NavbarData.map((item) => (
                        <Link to={item.path} key={item.path}>
                        <div>
                            <div className={`${active === item.path ? "bg-[#1d96fb]" : null} flex space-x-2 hover:bg-[#1d96fb] cursor-pointer hover:h-full py-[16px] px-3`}>
                            <div>{item.name}</div>
                            {/* <div className={`${item.name === "HOME" ? "hidden" : null} hover:text-white text-[#93979a] pt-1`}>{item.NavIcon}</div> */}
                            </div>
                        </div>
                        </Link>
                    ))}
                    </div>
                )}
                {(window.innerWidth > 1080 || isMenuOpen) && (
                    <div className='flex py-[12px]'>
                    <div>
                        <input type='text' className='bg-[#31393d] text-white font-[heebo] pl-[17px] lg:pl-[7px] xl:pl-[7px] py-1 ' placeholder='Search...' name='search' />
                    </div>
                    <div>
                        <button className='bg-[#31393d] text-white py-2 pr-3'>
                        <b>
                            <AiOutlineSearch />
                        </b>
                        </button>
                    </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}
