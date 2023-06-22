import React from 'react'
import TopLatestPost from './TopLatestPost'

export default function LatestPost() {
  return (
    <div>
      <div className='flex justify-between'>
      <div className='text-[17px] '>Latest Post</div>
    </div>
    <div className='flex'>
      <div className='h-[2px] mt-2 bg-[#1e96fc] w-10'></div>
      <div className='h-[2px] mt-2 bg-[#eeeeee] w-full'></div>
    </div>
    <div><TopLatestPost /></div>
    </div>
  )
}
