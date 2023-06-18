import React from 'react'
import FeaturedStories from './FeaturedStories'
import Navbar from './Navbar'
import TopNews from './TopNews'

export default function Home() {
  return (
    <div>
        <Navbar />
        <TopNews />
        <FeaturedStories />
        
    </div>
  )
}
