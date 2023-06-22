import React from 'react'
import { TopNewsData } from './Data/TopNewsData'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import TrendingStories from './TrendingStories'

export default function TopHeadlines() {
  return (
    <div>
        <div className='mt-6 flex space-x-6'>
        <div>
            {
                TopNewsData.map((item) => {
                    return(
                        <div className={`${item.Level === "Mid" ? "hidden" : null} w-[600px]`}>
                            <div><img className='w-[600px] object-cover' src={item.Photo} /></div>
                            <div className='font-[Poppins] text-[30px] hover:text-[#1d96fb] my-3'><b>{item.Headlines}</b></div>
                            <div className='flex space-x-2 font-[Heebo] text-[11px] mb-6'>
                                <div className='text-[#aaaaaa]'>BY <span className='text-[#1d96fb]'>{item.Author}</span></div>
                                <div className='flex space-x-1 text-[#aaaaaa]'>
                                    <div className='mt-[2.5px]'><AiOutlineClockCircle /></div>
                                    <div>{item.Time}</div>
                                </div>
                                <div className='flex space-x-1 text-[#aaaaaa]'>
                                    <div className='mt-[2.5px]'><FaRegComment /></div>
                                    <div>0</div></div>
                            </div>
                            <div className='font-[Heebo] text-[14px] text-[#595c5f] mb-4'>{item.Content}</div>
                            <div>
                                <button className='hover:bg-[#1d96fb] hover:text-white rounded font-[Heebo] px-[18px] py-[6px] text-[11px] text-[#a7a9aa] border hover:border-[#1d96fb] border-[#f0f0f0]'>READ MORE</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div>
            {
                TopNewsData.map((item) => {
                    return(
                 <div className='flex gap-5 mb-6'>
                    <div><img className='w-[150px] h-[100px] object-cover' src={item.Photo} /></div>
                    <div>
                    <div className='text-[20px] font-bold font-[Poppins] hover:text-[#1d96fb]'>{item.Headlines}</div>
                    <div className='font-[Heebo] text-[#a9a9a9] text-[11px] flex space-x-[2px] mt-1'>
                        <div><AiOutlineClockCircle className='mt-[2px]' /></div>
                        <div>{item.Time}</div>
                    </div>
                    </div>
                </div>
                    )
                })
            }
        </div>
    </div>
    <div><TrendingStories /></div>
    </div>
  )
}
