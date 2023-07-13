import React from 'react'
import { FeaturedStoriesNavbarData } from './Data/FeaturedStoriesNavbarData'
import TopHeadlines from './TopHeadlines'

export default function FeaturedStoriesNavbar() {
  return (
    <div>
      <div className='flex justify-between'>
      <div className='text-[17px] text-[#fe495c]'>Featured Stories</div>
      <div className='flex space-x-4 font-[heebo] text-[12px] text-[#7b7b7b]'>
      {
        FeaturedStoriesNavbarData.map((item) => {
          return(
            <div>
              <div className={`${item.Stories === 'ALL' ? "text-[#212121]" : null}`}>{item.Stories}</div>
            </div>
          )
        })
      }
      </div>
    </div>
    <div className='flex'>
      <div className='h-[2px] mt-2 bg-[#fe495c] w-10'></div>
      <div className='h-[2px] mt-2 bg-[#eeeeee] w-full'></div>
    </div>
    <div><TopHeadlines /></div>
    </div>
  )
}
