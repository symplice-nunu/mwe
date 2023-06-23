import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Copyright from '../Copyright'
import LifestyleTopNews from '../Lifestyle/LifestyleTopNews'

export default function Lifestyle() {
  return (
    <div>
    <div><Navbar /></div>
    <div className='px-[120px] pt-[130px]'>
    <div><LifestyleTopNews /></div>
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
