import React from 'react'
import TrendingTopStories from './Pages/TrendingTopStories'
import Entertainment from './Entertainment'

export default function TrendingStories() {
  return (
    <div>
      <div className='border border-[#e0e0e0] p-3'>
      <div className='flex justify-between'>
        <div className='text-[17px] text-[#31c384]'>Trending Stories</div>
        <div className='flex space-x-2 font-[Heebo] text-[12px] text-[#7b7b7b] mt-[5px] pr-3'>
        <div className='text-black'>ALL</div>
        <div>BUSINESS</div>
        <div>SPORTS</div>
        <div>WORLD</div>
        </div>
      </div>
      <div className='flex my-2'>
        <div className='bg-[#31c384] h-[2px] w-[40px]'></div>
        <div className='bg-[#eeeeee] h-[2px] w-full'></div>
      </div>
      <div>
        <div><TrendingTopStories /></div>
      </div>
    </div>
        <Entertainment />
    </div>
  )
}
