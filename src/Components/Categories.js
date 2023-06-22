import React from 'react'
import { CategoriesData } from './Data/CategoriesData'

export default function Categories() {
  return (
    <div className='my-[52px]'>
        <div className='text-[#353c40] font-bold text-[23px]'>Categories</div>
  <div className='flex'>
    <div className='h-[2px] mt-2 bg-[#1d96fb] w-12'></div>
    <div className='h-[2px] mt-2 bg-[#eeeeee] w-full'></div>
  </div>
  <div className='mt-7'>
  {
    CategoriesData.map((item) => {
        return (
            <div>
            <div className='flex justify-between mb-2'>
    <div className='font-bold font-[Heebo] text-[19px]'>{item.CategoryName}</div>
    <div className='text-[#a0a0a0]'>({item.CategoryNumber})</div>
  </div>
  <div className='h-[2px] mb-2 bg-[#eeeeee] w-full'></div>
        </div>
        )
    })
  }
  </div>
    </div>
  )
}
