import React from 'react'
import Navbar from '../Components/Sections/Navbar'
import Footer from '../Components/Sections/Footer'
import Copyright from '../Components/Sections/Copyright'
import SportTopNews from '../Components/Sections/Sport/SportTopNews'

export default function Sport() {
  return (
    <div>
    <div><Navbar /></div>
    <div className='px-[120px] pt-[130px]'>
        <div><SportTopNews /></div>
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
