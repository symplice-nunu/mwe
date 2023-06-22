import React from 'react'
import FeaturedStories from './FeaturedStories'
import Navbar from './Navbar'
import PremiumContent from './PremiumContent'
import TopNews from './TopNews'
import LatestPosts from './LatestPosts'

export default function Home() {
  return (
    <div>
      <div className='px-[120px]'>
        <Navbar />
        <TopNews />
        <FeaturedStories />
        
    </div>
    <div className='bg-[#222a2f] text-white px-[120px] py-[35px]'>
    <PremiumContent /> 
    </div>
    <div className="px-[120px] py-[15px]">
    <LatestPosts /> 
    </div>
    </div>
  )
}
