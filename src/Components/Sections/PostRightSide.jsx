import React from 'react'
import { TopNewsData } from './Data/TopNewsData'
import { AiOutlineClockCircle } from 'react-icons/ai'

export default function PostRightSide() {
  return (
    <div className='w-[480px]'>
    <div className='text-[20px] font-bold text-[#353c40]'>Premium Content</div>
  <div className='flex'>
    <div className='h-[2px] mt-2 bg-[#1d96fb] w-10'></div>
    <div className='h-[2px] mt-2 bg-[#eeeeee] w-full'></div>
  </div>
  
  <div className='mt-8'>
            {
                TopNewsData.map((item) => {
                    return(
                 <div className='flex gap-5 mb-6 '>
                    <div className='w-[250px] h-[130px]'><img className='w-full h-full object-cover' src={item.Photo} /></div>
                    <div className='w-[80%] min-h-[70px]'>
                        <h1 className='text-[20px]  font-bold font-[Poppins] hover:text-[#1d96fb]'>{item.Headlines}</h1>
                        <div className='font-[Heebo] text-[#a9a9a9] text-[11px] flex space-x-[2px] mt-1'>
                            <AiOutlineClockCircle className='mt-[2px]' />
                            <span>{item.Time}</span>
                        </div>
                    </div>
                </div>
                    )
                })
            }
        </div>
  </div>
  )
}
