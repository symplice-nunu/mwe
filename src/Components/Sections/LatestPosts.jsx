import React from 'react'
import LatestPost from './LatestPost'
import PopularPost from './PopularPost'


export default function LatestPosts() {
  return (
    <div className=''>
        <div className='flex space-x-10'>
        <div><LatestPost /></div>
        <div><PopularPost /></div>
    </div>
    </div>
  )
}
