import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { TbMathGreater } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'
import TopLatestPost from '../TopLatestPost';
import PostRightSide from '../PostRightSide';

export default function WorldTopNews() {
  return ( 
  <div>
    <div className='flex space-x-[2px] my-8'>
  <div className=" text-white flex items-end pb-[30px] pl-[25px] pr-[84px] bg-[url('https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/02/01-750x375.jpg')] bg-cover bg-center w-full">
      <div className='w-full'>
      <div className='bg-[#9f4bc3] rounded font-[heebo] text-[11px] py-[4px] px-[7px] w-[108px]'>ENTERTAINMENT</div>
      <div className='text-[26px] font-[Poppins] py-3'>Instagram Is Testing Photo Albums, Because Nothing is Sacred Anymore</div>
      <div className='flex space-x-3'>
      <div className='text-[11px]'><span className='text-[#fcfcfc]'>BY</span> <b>Mc CADMAN</b></div>
      <div className='text-[11px] flex space-x-[2px] text-[#fcfcfc]'>
          <div className='pt-[3px]'><AiOutlineClockCircle /></div>
          <div>MAY 24, 2023</div>
      </div>
      </div>
      </div>
      <div className='w-[0px]'></div>
  </div>
  <div className='space-y-[2px]'>
  <div className="bg-teal-400  flex items-end w-[790px] h-[350px] pb-[30px] px-[15px] text-white  bg-[url('https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/02/05-750x375.jpg')] bg-cover bg-center" >
  <div className='w-full'>
      <div className='bg-[#fe495c] rounded font-[heebo] text-[11px] py-[4px] px-[7px] w-[66px]'>BUSINESS</div>
      <div className='text-[18px] font-[Poppins] py-3'>Instagram Is Testing Photo Albums, Because Nothing is Sacred Anymore</div>
      <div className='flex space-x-3'>
      <div className='text-[11px]'><span className='text-[#fcfcfc]'>BY</span> <b>Mc CADMAN</b></div>
      <div className='text-[11px] flex space-x-[2px] text-[#fcfcfc]'>
          <div className='pt-[3px]'><AiOutlineClockCircle /></div>
          <div>MAY 24, 2023</div>
      </div>
      </div>
      </div>
      <div className='w-[0px]'></div>
  </div>
  <div className='space-y-[2px] flex gap-[2px] '>
  <div className=" bg-blue-300 h-[230px] flex items-end pb-[30px] px-[15px] text-white bg-[url('https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/02/07-750x375.jpg')] bg-cover bg-center">
  <div className='w-full'>
      <div className='bg-[#9f4bc3] rounded font-[heebo] text-[11px] py-[4px] px-[7px] w-[108px]'>ENTERTAINMENT</div>
      <div className='text-[18px] font-[Poppins] py-3'>Instagram Is Testing Photo Albums, Because Nothing is Sacred Anymore</div>
      <div className='flex space-x-3'>
      <div className='text-[11px]'><span className='text-[#fcfcfc]'>BY</span> <b>Mc CADMAN</b></div>
      <div className='text-[11px] flex space-x-[2px] text-[#fcfcfc]'>
          <div className='pt-[3px]'><AiOutlineClockCircle /></div>
          <div>MAY 24, 2023</div>
      </div>
      </div>
      </div>
      <div className='w-[0px]'></div>
  </div>
  <div className="  bg-blue-300 h-[230px] flex items-end pb-[30px] px-[15px] text-white bg-[url('https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/01/11-750x375.jpg')] bg-cover bg-center bg-no-repeat">
  <div className='w-full'>
      <div className='bg-[#c49529] rounded font-[heebo] text-[11px] py-[4px] px-[7px] w-[63px]'>FASHION</div>
      <div className='text-[18px] font-[Poppins] py-3'>Instagram Is Testing Photo Albums, Because Nothing is Sacred Anymore</div>
      <div className='flex space-x-3'>
      <div className='text-[11px]'><span className='text-[#fcfcfc]'>BY</span> <b>Mc CADMAN</b></div>
      <div className='text-[11px] flex space-x-[2px] text-[#fcfcfc]'>
          <div className='pt-[3px]'><AiOutlineClockCircle /></div>
          <div>MAY 24, 2023</div>
      </div>
      </div>
      </div>
      <div className='w-[0px]'></div>
  </div>
  </div>
  </div>
</div>
  <div className='flex gap-2 mb-4'>
    <Link to="/">
    <div className='hover:text-[#1d96fb]'>Home</div>
    </Link>    
    <div className='mt-[5px] text-[#b2acb5]'><TbMathGreater /></div>

    <Link to="/world">
    <div className='hover:text-[#1d96fb]'>Category</div>
    </Link>
    <div className='mt-[5px] text-[#b2acb5]'><TbMathGreater /></div>
    <Link to="/world">
    <div className='text-[#b2acb5] hover:text-[#1d96fb]'>World</div>
    </Link>
  </div>
  <div className='font-bold text-[60px] font-[Heebo]'>World</div>
  <div className='flex gap-4'>
    <div>
    <TopLatestPost />
    </div>
    <div>
    <PostRightSide />
    </div>
  </div>
  </div>
  )
}
