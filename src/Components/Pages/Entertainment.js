import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Copyright from '../Copyright'
import EntertainmentTopNews from '../Entertainment/EntertainmentTopNews'

export default function Entertainment() {
  return (
    <div>
    <div><Navbar /></div>
    <div className='px-[120px] pt-[130px]'>
    <div><EntertainmentTopNews /></div>
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
