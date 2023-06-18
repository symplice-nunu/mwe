import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'

export default function TopNews() {
  return (
    <div className='flex space-x-[2px] my-8'>
        <div className=" text-white flex items-end pb-[30px] pl-[25px] pr-[84px] bg-[url('https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/02/03-750x375.jpg')] bg-cover bg-center w-full">
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
        <div className="bg-teal-400 w-[590px] flex items-end pb-[30px] px-[15px] text-white  bg-[url('https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/01/19-750x375.jpg')] bg-cover bg-center" >
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
        <div className='space-y-[2px]'>
        <div className="w-[270px] bg-blue-300 h-[230px] flex items-end pb-[30px] px-[15px] text-white bg-[url('https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/01/18-750x375.jpg')] bg-cover bg-center">
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
        <div className="w-[270px] bg-blue-300 h-[230px] flex items-end pb-[30px] px-[15px] text-white bg-[url('https://jnews.io/bloomnews/wp-content/uploads/sites/75/2020/02/05-750x375.jpg')] bg-cover bg-center bg-no-repeat">
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
  )
}
