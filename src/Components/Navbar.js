import React from 'react'
import { NavbarData } from './Data/NavbarData'
import { AiOutlineSearch } from 'react-icons/ai'
import Og from '../Assets/images/og.png'

export default function Navbar() {
  return (
    <div>
        <div className='py-[5px]'>
            <img className='w-[120px]' src={Og} />
        </div>
    <div className=' bg-[#1b2227] flex justify-between px-[20px]'>
    <div  className='flex text-[#f5f5f5]  font-[Poppins] text-[15px] text-[uppercase]'>
        {
            NavbarData.map((item) => {
                return(
                         <div className={`${item.name === "HOME" ? "bg-[#1d96fb]" : null} flex space-x-2 hover:bg-[#1d96fb] hover:h-full py-[16px] px-3`}>
                            <div>{item.name}</div>
                            <div className={`${item.name === "HOME" ? "hidden" : null} text-[#93979a] pt-1`}>{item.NavIcon}</div>
                        </div>
                )
            })
        }

</div>
                            <div className='flex py-[12px]'>
                                <div><input type="text" className='bg-[#31393d] text-white font-[heebo] pl-[7px] py-1 ' placeholder='Search...' name='search' /></div>
                                <div> <button className='bg-[#31393d] text-white py-2 pr-3'><b><AiOutlineSearch /></b></button> </div>
                            </div>
                        </div>
    </div>
  )
}
