import React from 'react'
import FeaturedStories from './FeaturedStories'
import Navbar from './Navbar'
import PremiumContent from './PremiumContent'
import TopNews from './TopNews'
import LatestPosts from './LatestPosts'
import Footer from './Footer'
import Copyright from './Copyright'

export default function Home() {
  return (
    <div>
        <Navbar />
      <div className='xl:px-[120px] lg:px-[120px] px-[5px] pt-[130px]'>
        <TopNews />
        <FeaturedStories />
        
    </div>
    <div className='bg-[#222a2f] text-white xl:px-[120px] py-4 lg:px-[120px] px-[5px]'>
    <PremiumContent /> 
    </div>
    <div className="xl:px-[120px] py-4 lg:px-[120px] px-[5px]">
    <LatestPosts /> 
    </div>
    <div className="bg-[#222a2f] text-white xl:px-[120px] py-1 lg:px-[120px] px-[5px] xl:py-[35px] lg:py-[35px]">
      <Footer />
    </div>
    <div className="bg-[#000000] text-white xl:px-[120px] py-1 pb-8 lg:px-[120px] px-[5px] xl:py-[35px] lg:py-[35px]">
      <Copyright />
    </div>
    </div>
  )
}
