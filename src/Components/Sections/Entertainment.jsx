import React from 'react'

import { TopNewsData } from './Data/TopNewsData'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'

export default function Entertainment() {
  return (
    <div className='mt-6'>
        
      <div className='xl:flex lg:flex gap-10'>
      <div>
      <div className='text-[17px] text-[#9f4bc3]'>Entertainment</div>
        <div className='flex my-2 mb-6'>
        <div className='bg-[#9f4bc3] h-[2px] w-[40px]'></div>
        <div className='bg-[#eeeeee] h-[2px] w-full'></div>
      </div>
            {
                TopNewsData.map((item) => {
                    return(
                        <div className={`${item.Level === "Mid" ? "hidden" : null} xl:w-[400px] lg:w-[400px] w-full`}>
                            <div><img className=' xl:w-[400px] lg:w-[400px] w-full' src={item.Photo} alt='news' /></div>
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
        <div className=''>
        <div className='text-[17px]  text-[#c67837]'>World</div>
        <div className='flex my-2 mb-6'>
            <div className='bg-[#c67837] h-[2px] w-[40px]'></div>
            <div className='bg-[#eeeeee] h-[2px] w-full'></div>
        </div>
            {
                TopNewsData.map((item) => {
                    return(
                        <div className={`${item.Level === "Mid" ? "hidden" : null} xl:w-[400px] lg:w-[400px] w-full`}>
                            <div><img className='xl:w-[400px] lg:w-[400px] w-full' src={item.Photo} alt='news' /></div>
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
      <div className='xl:flex lg:flex gap-10 mt-6'>
      <div>
            {
                TopNewsData.map((item) => {
                    return(
                 <div className='xl:flex lg:flex md:flex gap-5 mb-6'>
                    <div><img className='lg:w-[150px] xl:w-[150px] md:w-[150px] w-full h-[200px] xl:h-[100px] lg:h-[100px] md:h-[100px] object-cover ' src={item.Photo} alt='news' /></div>
                    <div>
                    <div className='text-[16px] font-bold font-[Poppins] hover:text-[#1d96fb]'>{item.Headlines}</div>
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
                 <div className='xl:flex lg:flex md:flex gap-5 mb-6'>
                    <div><img className='lg:w-[150px] xl:w-[150px] md:w-[150px] w-full h-[200px] xl:h-[100px] lg:h-[100px] md:h-[100px] object-cover ' src={item.Photo} alt='news' /></div>
                    <div>
                    <div className='text-[16px] font-bold font-[Poppins] hover:text-[#1d96fb]'>{item.Headlines}</div>
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
