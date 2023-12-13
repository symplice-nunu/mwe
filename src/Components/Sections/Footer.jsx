import React from 'react'
import mweLogo from '../../Assets/images/og.png'
import { CategoriesData } from './Data/CategoriesData'
import { BrowseTagData } from './Data/BrowseTagData'
export default function Footer() {
  return (
    <div className='my-[10px]'>
        <div className='xl:flex lg:flex gap-20'>
            <div className='font-[Heebo] text-[18px]'>
                <div className='mb-12'><img className='w-[120px]' src={mweLogo} alt='news' /></div>
                <div className='mb-8 text-[#a9adae] text-[22px]'>
                    <div>We bring you the best Premium</div> 
                    <div>WordPress Themes that perfect for news,</div> 
                    magazine, personal blog, etc. Check our 
                    landing page for details.</div>
                <div className='text-[#c8c7cb] hover:text-white'>Learn more</div>
            </div>
            <div>
                <span className='text-[28px]' >Categories</span>
                <div className='grid-cols-2 grid mt-8'>
                {
                    CategoriesData.map((item) => {
                        return(
                            <div className='pb-4 text-[#cfcac5] hover:text-white'>
                                <div>{item.CategoryName}</div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div >
            <span className='text-[28px]' >Browse by Tag</span>
                <div className='grid-cols-2 grid mt-8 '>
                {
                    BrowseTagData.map((item) => {
                        return(
                            <div className='pb-2 text-[#cfcdc5] hover:text-white '>
                                <div className={`${item.BrowseTagName === "Work From Home" ? "xl:w-[155px] lg:w-[155px]" : item.BrowseTagName === "Market Stories" ? "xl:w-[155px] lg:w-[155px]" : null} bg-[#31363a] hover:bg-[#1e96fc]  mr-2 py-[10px] px-[14px]`}>{item.BrowseTagName}</div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div>
            <span className='text-[28px]' >Recent Posts</span>
                <div className='text-[#a9adae] mt-8'>
                <div className='mb-6 text-[15px] hover:text-white'>This Easy Cardio Swap Will Help You Train for A Half Marathon</div>
                <div className='mb-6  hover:text-white text-[15px]'>Economists See Few Monetary Policy Changes With Powell Leading Fed</div>
                <div className=' hover:text-white text-[15px]'>Jekardah Nightlife Offers Many Hotspots for People with Alternative Lifestyles</div>
                </div>
            </div>
        </div>
    </div>
  )
}
