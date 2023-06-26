import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import {FaRegTimesCircle} from 'react-icons/fa'
import {FaQuestionCircle} from 'react-icons/fa'
import { useState } from 'react'
import { SSLExpire } from './Data/SSLData'
import { ScrumSummary } from './Data/ScrumSummary'

export default function Dashboard() {
    const [data, setData] = useState({
        flashMessage: true,
    })

  return (
    <div className='bg-[#87cefa] w-full h-screen p-12'>
        <div className='bg-white w-full rounded-3xl flex'>
        <div className='py-12 px-4'>
        <Sidebar />
        </div>
        <div className='bg-[#f0f9ff] my-8 w-full mr-8 rounded-3xl p-8'>
            
            <div>
              <Navbar />  
            </div>
            <div>
                 {/* Sidebar Options. Done by Symplice 21.03.2023  */}
          
            {/* Morning Messages for Users. Done by Symplice 21.03.2023  */}
            <div class="flex flex-col gap-y-6 bg-sky-50 mx-auto py-8 px-4 md:px-8 rounded-t-3xl  w-full rounded-b-3xl ">
                <div className=''> 
                     
                     <div className='text-sky-900 font-bold text-2xl'> MWE News Dashboard</div>
                     <div className='text-sky-300 text-xs pt-2'>Hello <span className='font-bold font-[Heebo]'>MC CADMAN</span> Please check the status about million ways entertainment on this Page.</div>
                </div>
                {/* Contents for Announcement. Done by Symplice 21.03.2023  */}
                {
                    data.flashMessage && <div className="flex flex-col bg-orange-200 px-8 py-8 text-orange-500 rounded-2xl">
                        <span className="mb-2 flex">
                            <span className='mt-1 pr-2'>
                                <FaQuestionCircle />
                            </span>
                            <b>Announcement!</b>
                            </span>
                        <div className='pl-6 flex justify-between items-center'>
                            <div>ChainPoint Support will be upgraded to release 6.10 on Wednesday 6 April. Thanks to the use of slot deployment</div>
                            <div onClick={() => setData({ ...data, flashMessage: false })} className='text-2xl cursor-pointer'><FaRegTimesCircle /></div>
                        </div>
                        <span className='pl-6'>functionality no outage time is expected. After the upgrade a new message will be posted here.</span>
                        <span className='pl-6'>-- ChainPoint Support Team, 20.03.23</span>
                    </div>
                }
                {/* Cards sections for Hight priority issues and issue ready for test. Done by Symplice 21.03.2023 */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
                    <div className="bg-white rounded-xl px-3 py-8 flex items-center">
                        <div className="border-red-200 border-2 rounded-full w-16 h-16 pt-0.5 pl-0.5">
                            <div className="border-red-600 border-2 rounded-full w-14 h-14 text-red-600 pl-5 pt-3">0</div>
                            
                        </div>
                        <div className="px-9 pt-2 ">News</div>
                    </div>
                    <div className="bg-white rounded-xl px-3 py-8 flex items-center">
                    <div className="border-orange-200 border-2 rounded-full w-16 h-16 pt-0.5 pl-0.5">
                            <div className="border-orange-400 border-2 rounded-full w-14 h-14 text-orange-600 pl-5 pt-3">1</div>
                        </div>
                        <div className="px-6 ">Top News </div>
                    </div>
                    <div className="bg-white rounded-xl px-3 py-8 flex items-center">
                    <div className="border-green-200 border-2 rounded-full w-16 h-16 pt-0.5 pl-0.5">
                            <div className="border-green-400 border-2 rounded-full w-14 h-14 text-green-400 pl-5 pt-3">2</div>
                        </div>
                        <div className="px-9 pt-2 ">Entertainment</div>
                    </div>
                    <div className="bg-white  rounded-xl px-6 py-3  pt-4 grid">
                    <div>
                        <div className='flex justify-between items-center'>
                        <div className="text-xs">Popular News</div>
                        <div className="text-xs">34 / <span className="text-gray-300">96</span></div>
                        </div>
                        <hr className="border-orange-500 border-2 rounded w-32"></hr>
                    </div>
                    <div className="border-red-500 ">
                        <div className='flex justify-between items-center'>
                        <div className="text-xs">Sport News</div>
                        <div className="text-xs">5820 / <span className="text-gray-300">5832</span></div>
                        </div>
                        <hr className="border-blue-500 border-2 rounded"></hr>
                        </div>
                    <div className="">
                        <div className='flex justify-between'>
                        <div className="text-xs">Business</div>
                        <div className="text-xs">12 / <span className="text-gray-300">22</span></div>
                        </div>
                        <hr className="border-green-500 border-2 rounded w-24"></hr>
                    </div>
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-y-6">
                    <div className="bg-white rounded-xl px-3 py-3 h-auto w-full mr-4">
                    {/* SSL about to expire table. Done by Symplice 22.03.2023 */}
                        <div className='flex justify-between px-3'>
                        <div>Entertainment News<span className="ml-6 bg-sky-50 rounded-full px-2 text-sky-600">45</span></div>
                        <div>
                            <input className='border-gray-300 border-2 px-3 rounded text-xs h-8 ml-2' type="button" value="<" />
                            <input className='border-gray-300 border-2 px-3 rounded text-xs h-8 ml-2 w-14 text-sky-600' type="button" value="1" />
                            <input className='border-gray-300 border-2 px-3 rounded text-xs h-8 ml-2' type="button" value=">" />
                        </div> 
                        </div>
                        <div>
                            <hr className='border border-gray-100 mb-2 mt-2'></hr>
                        </div>

                        <div>
                            <table className='w-full'>
                                <tr className='text-sky-600 h-10'>
                                    <th className='w-48 text-left pl-3'>Company</th>
                                    <th className='w-32 text-left'>Start Date</th>
                                    <th className='w-32 text-left'>End date</th>
                                    <th className='text-left'>Remark</th>
                                </tr>
                                {
                                    SSLExpire.map((item, index) => {
                                        return(
                                    <tr key={index} className={`${index % 2 === 0 ? "bg-sky-50" : "bg-white"} text-sky-800 text-xs h-8 rounded-xl`}>
                                    <td className='pl-3'>{item.Company}</td>
                                    <td>{item.StartDate}</td>
                                    <td>{item.EndDate}</td>
                                    <td>{item.Remark}</td>
                                </tr>
                                        )
                                    })
                                }
                               
                            </table>
                        
                        </div>
                    </div>
                    <div className="bg-white rounded-xl px-3 py-3 h-auto w-full">
                    {/* Scrum summary per person. Done by Symplice 22.03.2023 */}
                    <div className=''>
                        <div className='text-xs mb-4'>Top News<span className="ml-6 bg-sky-50 rounded-full px-2 text-sky-600">45</span></div>
                        
                        <div>
                            <hr className='border border-gray-100 mb-2 mt-2'></hr>
                        </div>
                    </div>
                    <div>
                            <table className='w-full'>
                                <tr className='text-sky-600 h-10'>
                                    <th className='w-48 text-left text-xs pl-3'>Responsible</th>
                                    <th className='w-32 text-left text-xs'>Total Hours</th>
                                    <th className='w-32 text-left text-xs'>Hours Available</th>
                                </tr>
                               {
                                ScrumSummary.map((item, index) => {
                                    return(
                                        <tr key={index} className={`${index % 2 === 0 ? "bg-sky-50" : "bg-white"} text-sky-800 text-xs h-8 rounded-xl`}>
                                        <td className='pl-3'>{item.Responsible}</td>
                                        <td>{item.TotalHours}</td>
                                        <td>{item.HoursAvailable}</td>
                                    </tr>
                                    )
                                })
                               }
                                
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
        </div>
    </div>
  )
}
