import React from 'react'
import { TopNewsData } from './Data/TopNewsData'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'

export default function TopLatestPost() {
  return (
    <div>
        <div className='mt-6 flex '>
        <div>
            {
                TopNewsData.map((item) => {
                    return(
                        <div className={` flex gap-12 mb-10`}>
                            <div><img className='w-[800px] h-[400px] object-cover' src={item.Photo}  alt='news'/></div>
                            <div className='w-[800px]'>
                            <div className='font-[Poppins] text-[33px] hover:text-[#1d96fb] my-3'><b>{item.Headlines}</b></div>
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
                            <div className='font-[Heebo] text-[20px] text-[#595c5f] mb-4'>{item.Content}</div>
                            <div>
                                <button className='hover:bg-[#1d96fb] hover:text-white rounded font-[Heebo] px-[18px] py-[6px] text-[11px] text-[#697374] border hover:border-[#1d96fb] border-[#e0e0e0'>READ MORE</button>
                            </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    </div>
  )
}
