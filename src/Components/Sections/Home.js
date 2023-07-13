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
      <div className='px-[120px]'>
        <TopNews />
        <FeaturedStories />
        
    </div>
    <div className='bg-[#222a2f] text-white px-[120px] py-[35px]'>
    <PremiumContent /> 
    </div>
    <div className="px-[120px] py-[15px]">
    <LatestPosts /> 
    </div>
    <div className="bg-[#222a2f] text-white px-[120px] py-[35px]">
      <Footer />
    </div>
    <div className="bg-[#000000] text-white px-[120px] py-[35px]">
      <Copyright />
    </div>
    </div>
  )
}
