import React from 'react'
import { PremiumContentData } from './Data/PremiumContentData'
import { AiOutlineClockCircle } from 'react-icons/ai'

export default function PremiumContent() {
  return (
    <div>
        <div className='text-[17px]  text-[#ffffff]'>Premium Content</div>
        <div className='flex my-2 mb-6'>
        <div className='bg-[#1d96fb] h-[2px] w-[40px]'></div>
        <div className='bg-[#4f5559] h-[2px] w-full'></div>
      </div>
      <div className='xl:flex lg:flex gap-8 grid md:grid-cols-2'>
        {
            PremiumContentData.map((item) => {
                return(
                    <div className='text-white xl:w-[280px] lg:w-[280px]'>
                        <div className="bg-[url('https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/01/16-350x250.jpg')] bg-cover bg-center  h-[180px] flex items-end p-2">
                            <div className={`${item.title === "FOOD" ? "bg-[#3ae030]" : item.title === "HEALTH" ? "bg-[#17d2fb]" : item.title === "FASHION" ? "bg-[#c49529]" : "bg-[#3cdc96]"} font-[Heebo] text-[11px] px-[7px] py-[2px] rounded`}>{item.title}</div>
                        </div>
                        <div className=' font-[Poppins] hover:text-[#65b5fd] text-[18px] my-3'>{item.headlines}</div>
                        <div className='text-[#b2b2b2] text-[11px] flex space-x-[2px]'>
                        <div className='mt-[2px]'><AiOutlineClockCircle /></div>
                        <div>{item.time}</div>
                        </div>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}
