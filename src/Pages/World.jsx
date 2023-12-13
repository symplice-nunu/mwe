import React from 'react'
import Navbar from '../Components/Sections/Navbar'
import Footer from '../Components/Sections/Footer'
import Copyright from '../Components/Sections/Copyright'
import WorldTopNews from '../Components/Sections/World/WorldTopNews'
export default function World() {
  return (
    <div>
        <div><Navbar /></div>
    <div className='xl:px-[120px] lg:px-[120px] px-[5px] pt-[130px]'>
    <div><WorldTopNews /></div>
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
