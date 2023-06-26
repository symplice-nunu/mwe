import React from 'react'
import {FaChevronDown} from 'react-icons/fa'
import {FaUserCircle} from 'react-icons/fa'
import {FaRegBell} from 'react-icons/fa'
import Dropdown from './Dropdown'
export default function Navbar() {
  return (
    <div>
       <div className='flex justify-between items-center text-sky-900 font-bold mb-4'>
       <div className='flex items-center'>
                       MILLION WAY ENTERTAINMENT
                        <span className='text-orange-500 ml-2'>
                            <FaChevronDown />
                            </span>
                       </div>
                     <div className='flex items-center'>
                        <span className=''>
                        <FaRegBell />
                        </span>
                        <span className='text-blue-500 text-5xl ml-3 mr-2'>
                        <FaUserCircle />
                        </span>
                        <Dropdown />
                     </div>
                     </div> 
    </div>
  )
}
