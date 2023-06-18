import React from 'react'
import FeaturedStoriesNavbar from './FeaturedStoriesNavbar'
import FollowUs from './FollowUs'

export default function FeaturedStories() {
  return (
    <div className='flex space-x-10'>
        <div><FeaturedStoriesNavbar /></div>
        <div><FollowUs /></div>
    </div>
  )
}
