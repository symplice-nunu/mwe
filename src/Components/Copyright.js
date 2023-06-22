import React from 'react'
import { FollowUpData } from './Data/FollowUpData'

export default function Copyright() {
  return (
    <div className='flex justify-between'>
        <div className='text-[#a9afb3]'>&copy; 2023 Million Ways Entertainment. All rights reserved.</div>
        <div className='flex gap-3'>
            {
                FollowUpData.map((item) => {
                    return(
                        <div>
                            <div className='text-[21px] cursor-pointer'> <a href="#" >{item.FollowLogo}</a> </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
