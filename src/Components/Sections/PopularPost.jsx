import React from 'react'
import { AiOutlineShareAlt } from 'react-icons/ai'
import Categories from './Categories'

export default function PopularPost() {
  return (
    <div className='w-[480px]'>
    <div className='text-[17px] text-[#353c40]'>Popular Post</div>
  <div className='flex'>
    <div className='h-[2px] mt-2 bg-[#1d96fb] w-10'></div>
    <div className='h-[2px] mt-2 bg-[#eeeeee] w-full'></div>
  </div>
  <div className='mt-[25px]'>
    <div><img  className='w-full object-cover' src="https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/02/03-350x250.jpg" alt='news' /></div>
    <div className='my-5 flex space-x-4'>
        <div className='text-[28px] font-bold font-[Poppins] hover:text-[#1d96fb]'>Instagram Is Testing Photo Albums, Because Nothing Is Sacred Anymore</div>
        <div className='w-[5px] h-[20] bg-[#eeeeee]'></div>
        <div className='text-[#d7d7d7] text-[68px] font-bold font-[Poppins]'>01</div>
    </div>
    <div className='text-[#a4a4a4] flex gap-2'>
        <div className='mt-1'><AiOutlineShareAlt /></div>
        <div>2045 SHARES</div>
    </div>
    <div className='bg-[#eeeeee] h-[4px] my-4'></div>
    <div className='flex gap-4 mb-4'>
        <div className='bg-[#eeeeee] hover:text-white hover:bg-[#1d96fb] pt-[6px] h-[50px] w-[50px] text-center text-[24px] font-bold font-[Poppins] rounded-full'>
            02
        </div>
        <div>
            <div className='mb-3 hover:text-[#1d96fb]'>Google, Facebook Extend Work From Home Policies Until 2021</div>
            <div>
            <div className='text-[#a4a4a4] flex gap-2'>
        <div className='mt-1'><AiOutlineShareAlt /></div>
        <div>2045 SHARES</div>
    </div>
            </div>
        </div>
    </div>
    <div className='flex gap-4 mb-4'>
        <div className='bg-[#eeeeee] hover:text-white hover:bg-[#1d96fb] pt-[6px] h-[50px] w-[50px] text-center text-[24px] font-bold font-[Poppins] rounded-full'>
            03
        </div>
        <div>
            <div className='mb-3 hover:text-[#1d96fb]'>Will It Be Safe to Travel This Summer? Here’s Your Options</div>
            <div>
            <div className='text-[#a4a4a4] flex gap-2'>
        <div className='mt-1'><AiOutlineShareAlt /></div>
        <div>2045 SHARES</div>
    </div>
            </div>
        </div>
    </div>
    <div className='flex gap-4 mb-4'>
        <div className='bg-[#eeeeee] hover:text-white hover:bg-[#1d96fb] pt-[6px] h-[50px] w-[50px] text-center text-[24px] font-bold font-[Poppins] rounded-full'>
            04
        </div>
        <div>
            <div className='mb-3 hover:text-[#1d96fb]'>These Foods to Absolutely Avoid If You Want Clear, Glowing Skin</div>
            <div>
            <div className='text-[#a4a4a4] flex gap-2'>
        <div className='mt-1'><AiOutlineShareAlt /></div>
        <div>2045 SHARES</div>
    </div>
            </div>
        </div>
    </div>
    <div className='flex gap-4 mb-4'>
        <div className='bg-[#eeeeee] hover:text-white hover:bg-[#1d96fb] pt-[6px] h-[50px] w-[50px] text-center text-[24px] font-bold font-[Poppins] rounded-full'>
            05
        </div>
        <div>
            <div className='mb-3 hover:text-[#1d96fb]'>This Easy Cardio Swap Will Help You Train for A Half Marathon</div>
            <div>
            <div className='text-[#a4a4a4] flex gap-2'>
        <div className='mt-1'><AiOutlineShareAlt /></div>
        <div>2045 SHARES</div>
    </div>
            </div>
        </div>
    </div>
  </div>
  <div className='border-[#e0e0e0] border rounded p-10 text-center'>
    <h1 className='font-bold text-[25px] mb-2'>Subscribe to our mailing list to receives daily updates!</h1>
    <div className='text-[#6c6e71] mb-4'>We won't spam you</div>
    <div><input type="text" className='w-full mb-4 text-center h-[42px] rounded border-[#e0e0e0] border' placeholder='Your Email Address' /></div>
    <div><input type="button" className='w-full mb-4 text-center rounded text-white bg-[#1e96fc]  h-[42px] ' value='SIGN UP' /></div>

  </div>
  <Categories />
  </div>
  )
}
