import React from 'react'
import Sidebar from './Sidebar'
import Navbar from "./Navbar"
import { Link } from 'react-router-dom'

export default function AddNews() {
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
            <div
            className=""
          >
            <div className="">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t ">
                  <h3 className="text-3xl font-semibold">
                    ADD NEWS
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className=" text-slate-500 text-lg leading-relaxed ">
                    <div class=" bg-gray-100 p-0 sm:p-3 sm:rounded-3xl ">
                <div class="mx-auto px-6 py-3 bg-white border-0 shadow-lg sm:rounded-3xl ">
                  <form id="form" novalidate>
                  

                    <div class="relative z-0 w-full mb-5">
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter News Title"
                        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                      />
                      <span class="text-sm text-red-600 hidden" id="error">News Title is required</span>
                    </div>
                    <div class="relative z-0 w-full mb-5 ">
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter Headlines"
                        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                      />
                      <span class="text-sm text-red-600 hidden" id="error">Headlines is required</span>
                    </div>
                    <div class="relative z-0 w-full mb-5">
                      <input
                        type="text"
                        name="Headlines"
                        placeholder="Enter Author"
                        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                      />
                      <span class="text-sm text-red-600 hidden" id="error">Author is required</span>
                    </div>

                    <div class="relative z-0 w-full mb-5">
                      <input
                        type="text"
                        name="password"
                        placeholder="Enter News Photo"
                        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                      />
                      <span class="text-sm text-red-600 hidden" id="error">News Photo is required</span>
                    </div>

                    <div class="relative z-0 w-full mb-5">
                            <select className='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200'>
                                <option>Entertainment</option>
                                <option>Business</option>
                                <option>Sport</option>
                                <option>Health</option>
                                <option>Lifestyle</option>
                            </select>
                      <span class="text-sm text-red-600 hidden" id="error">News Category is required</span>
                    </div>
                    <div class="relative z-0 w-full mb-5">
                        <textarea placeholder='Enter full News Content' className='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200'>
                            
                        </textarea>
                    </div>
                        
                    </form>
                      </div>
                    </div>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <Link to="/dashboard">
                  <button
                    className="text-red-500 bg-[#87cefa] rounded font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    
                  >
                    Cancel
                  </button>
                  </Link>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    
                  >
                    SUBMIT
                  </button>
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
