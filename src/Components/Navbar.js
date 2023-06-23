import React, { useState } from 'react'
import { NavbarData } from './Data/NavbarData'
import { AiOutlineSearch } from 'react-icons/ai'
import Og from '../Assets/images/og.png'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation();
    const active = location.pathname
    const [isMouseOver, setIsMouseOver] = useState(false);
  
    const handleMouseEnter = () => {
      setIsMouseOver(true);
    };
    const handleMouseLeave = () => {
      setIsMouseOver(false);
    };
   
  return (
    <div className='px-[120px] fixed z-[1] w-full bg-white'>
        <div className='py-[5px]'>
            <img className='w-[80px]' src={Og} />
        </div>
        <div onMouseLeave={handleMouseLeave}  className=''>
            <div className=' bg-[#1b2227] flex justify-between px-[20px]'>
                <div className='flex text-[#f5f5f5]  font-[Poppins] text-[15px] text-[uppercase]'>
                    {
                        NavbarData.map((item) => {
                            return(
                                    <Link to={item.path}>
                                    <div onMouseEnter={handleMouseEnter} >
                                    <div className={`${active === item.path ? "bg-[#1d96fb]" : null} flex space-x-2 hover:bg-[#1d96fb] cursor-pointer hover:h-full py-[16px] px-3`}>
                                        <div>{item.name}</div>
                                        <div className={`${item.name === "HOME" ? "hidden" : null} hover:text-white text-[#93979a] pt-1`}>{item.NavIcon}</div>
                                    </div>
                                    </div>
                                    </Link>
                            )
                        })
                    }
                </div>

                <div className='flex py-[12px]'>
                    <div><input type="text" className='bg-[#31393d] text-white font-[heebo] pl-[7px] py-1 ' placeholder='Search...' name='search' /></div>
                    <div> <button className='bg-[#31393d] text-white py-2 pr-3'><b><AiOutlineSearch /></b></button> </div>
                </div>
                
            </div>
            {isMouseOver && 
            <div className='w-full h-[200px] bg-[#f5f0f6]' >

            </div>}
        </div>
    </div>
  )
}
