import React from 'react'
import Sidebar from './Sidebar'
import Navbar from "./Navbar"

export default function AddNews() {
  return (
    <div className='bg-[#87cefa] w-full h-screen p-12'>
        <div className='bg-white w-full rounded-3xl flex'>
        <div className='py-12 px-4'>
        <Sidebar />
        </div>
        <div className='bg-[#f0f9ff] my-8 w-full mr-8 rounded-3xl p-8'>
            <Navbar />z
zscxz
        </div>
        </div>
    </div>
  )
}
