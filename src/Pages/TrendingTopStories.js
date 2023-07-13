import React from 'react'
import { TrendingStoriesData } from '../Components/Sections/Data/TrendingStoriesData'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaGreaterThan } from 'react-icons/fa'
import { FaLessThan } from 'react-icons/fa'


export default function TrendingTopStories() {
  return (
    <div>
        <div className='flex space-x-8'>
        {
            TrendingStoriesData.map((item) => {
                return(
                    <div className='text-white w-[320px]'>
                        <div className="bg-[url('https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/01/20-750x375.jpg')] bg-cover bg-center w-[320px] h-[200px] flex items-end p-2">
                            <div className={`${item.title === "TRAVEL" ? "bg-[#dfca3e]" : item.title === "BUSINESS" ? "bg-[#fe495c]" : "bg-[#3cdc96]"} font-[Heebo] text-[11px] px-[7px] py-[2px] rounded`}>{item.title}</div>
                        </div>
                        <div className='text-[#1b2227] font-[Poppins] hover:text-[#65b5fd] text-[18px] my-3'>{item.headlines}</div>
                        <div className='text-[#b2b2b2] text-[11px] flex space-x-[2px]'>
                        <div className='mt-[2px]'><AiOutlineClockCircle /></div>
                        <div>{item.time}</div>
                        </div>
                    </div>
                )
            })
        }
    </div>
    <div className='flex space-x-2'>
    <div className='h-[2px] w-full mt-4 bg-[#eeeeee]'></div>
    <div><button className='border border-[#eeeeee] px-3 py-2'><FaLessThan /></button></div>
    <div><button className='border border-[#eeeeee] px-3 py-2'><FaGreaterThan /></button></div>
    <div className='h-[2px] w-full mt-4 bg-[#eeeeee]'></div>
    </div>
    </div>
  )
}
