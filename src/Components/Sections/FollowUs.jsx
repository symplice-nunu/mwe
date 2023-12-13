import React from 'react'
import SocialMedia from './SocialMedia'
import TrendingComments from './TrendingComments'

export default function FollowUs() {
  return (
    <div className='xl:w-[360px] lg:w-[360px]'>
      <div className='text-[17px] text-[#353c40]'>Follow Us</div>
      <div className='flex'>
        <div className='h-[2px] mt-2 bg-[#1d96fb] w-10'></div>
        <div className='h-[2px] mt-2 bg-[#eeeeee] w-full'></div>
      </div>
      <div><SocialMedia /></div>
      <TrendingComments />
  </div>
  )
}
