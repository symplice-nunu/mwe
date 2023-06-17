import React from 'react'
import FeaturedStoriesNavbar from './FeaturedStoriesNavbar'
import FollowUs from './FollowUs'

export default function FeaturedStories() {
  return (
    <div className='flex justify-between'>
        <div><FeaturedStoriesNavbar /></div>
        <div><FollowUs /></div>
    </div>
  )
}
