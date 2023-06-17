import React from 'react'
import { FollowUpData } from './Data/FollowUpData'

export default function SocialMedia() {
  return (
   <div className='flex justify-center flex-wrap my-6'>
     {
        FollowUpData.map((item) => {
            return(
                <div className={`${item.Social === "instagram" ? "bg-[#e3405f]" : item.Social === "you" ? "bg-[#c61d23]" : item.Social === "snap" ? "bg-[#feae00]"   : item.Social === "tik" ? "bg-teal-400"  : item.Social === "twit" ? "bg-[#1f71ff]" : "bg-[#ff0077]"} text-center mr-[1px] mb-[1px] text-white px-[27.3px] py-3 w`}>
                    <div className='text-[28px] ml-[10px]'>{item.FollowLogo}</div>
                    <div className='text-[18px]'>{item.Subscribed}</div>
                    <div className='text-[11px] font-[Heebo]'>{item.FollowType}</div>
                </div>
            )
        })
    }
   </div>
  )
}
