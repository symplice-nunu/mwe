import React from 'react'

import { TopNewsData } from './Data/TopNewsData'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'

export default function Entertainment() {
  return (
    <div className='mt-6'>
        <div className='text-[17px] text-[#9f4bc3]'>Trending Stories</div>
        <div className='flex my-2'>
        <div className='bg-[#9f4bc3] h-[2px] w-[40px]'></div>
        <div className='bg-[#eeeeee] h-[2px] w-full'></div>
      </div>
      <div className='flex gap-10'>
      <div className='mt-5'>
            {
                TopNewsData.map((item) => {
                    return(
                        <div className={`${item.Level === "Mid" ? "hidden" : null} w-[400px]`}>
                            <div><img className='w-[400px]' src={item.Photo} /></div>
                            <div className='font-[Poppins] text-[20px] hover:text-[#1d96fb] my-3'><b>{item.Headlines}</b></div>
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
                           
                        </div>
                    )
                })
            }
        </div>
        <div className='mt-5'>
            {
                TopNewsData.map((item) => {
                    return(
                        <div className={`${item.Level === "Mid" ? "hidden" : null} w-[400px]`}>
                            <div><img className='w-[400px]' src={item.Photo} /></div>
                            <div className='font-[Poppins] text-[20px] hover:text-[#1d96fb] my-3'><b>{item.Headlines}</b></div>
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
                           
                        </div>
                    )
                })
            }
        </div>
      </div>
      <div className='flex gap-10 mt-6'>
      <div>
            {
                TopNewsData.map((item) => {
                    return(
                 <div className='grid grid-cols-2 mb-6'>
                    <div><img className='w-[150px] ' src={item.Photo} /></div>
                    <div>
                    <div className='text-[15px] font-[Poppins] hover:text-[#1d96fb]'>{item.Headlines}</div>
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
        <div>
            {
                TopNewsData.map((item) => {
                    return(
                 <div className='grid grid-cols-2 mb-6'>
                    <div><img className='w-[150px] ' src={item.Photo} /></div>
                    <div>
                    <div className='text-[15px] font-[Poppins] hover:text-[#1d96fb]'>{item.Headlines}</div>
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
    </div>
  )
}
