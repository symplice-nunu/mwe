import React from 'react'
import mweLogo from '../Assets/images/og.png'
import { CategoriesData } from './Data/CategoriesData'
export default function Footer() {
  return (
    <div className='my-[80px]'>
        <div className='flex gap-24'>
            <div className='font-[Heebo] text-[28px]'>
                <div className='mb-12'><img className='w-[120px]' src={mweLogo} /></div>
                <div className='mb-8 text-[#a9adae]'>We bring you the best Premium WordPress Themes that perfect for news, magazine, personal blog, etc. Check our landing page for details.</div>
                <div className='text-[#c8c7cb] hover:text-white'>Learn more</div>
            </div>
            <div>
                <span className='text-[28px]' >Categories</span>
                <div className='grid-cols-2 grid mt-8'>
                {
                    CategoriesData.map((item) => {
                        return(
                            <div className='pb-4 text-[#cfcdc5] hover:text-white mr-10'>
                                <div>{item.CategoryName}</div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div>
            <span className='text-[28px]' >Browse by Tag</span>
                <div className='grid-cols-2 grid mt-8'>
                {
                    CategoriesData.map((item) => {
                        return(
                            <div className='pb-4 text-[#cfcdc5] hover:text-white'>
                                <div>{item.CategoryName}</div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div>
            <span className='text-[28px]' >Recent Posts</span>
                <div className='text-[#a9adae] mt-8'>
                <div className='mb-6 text-[22px] hover:text-white'>This Easy Cardio Swap Will Help You Train for A Half Marathon</div>
<div className='mb-6 text-[22px] hover:text-white'>Economists See Few Monetary Policy Changes With Powell Leading Fed</div>
<div className=' text-[22px] hover:text-white'>Jekardah Nightlife Offers Many Hotspots for People with Alternative Lifestyles</div>
                </div>
            </div>
        </div>
    </div>
  )
}
