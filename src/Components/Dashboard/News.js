import React from 'react'
import Sidebar from './Sidebar'
import Navbar from "./Navbar"
import { Data } from "./Data/Data"
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"

export default function News() {
    const [showModal, setShowModal] = React.useState(false);
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
            
            <div className="flex ">
                    <div className="bg-white rounded-xl px-3 py-3 h-auto w-full mr-4">
                        <div>
                        <>
      <button
        className="bg-blue-400 my-4 mx-4 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-3 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
      ADD NEWS
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t ">
                  <h3 className="text-3xl font-semibold">
                    ADD NEWS
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className=" text-slate-500 text-lg leading-relaxed ">
                    <div class=" bg-gray-100 p-0 sm:p-3 sm:rounded-3xl ">
  <div class="mx-auto px-6 py-3 bg-white border-0 shadow-lg sm:rounded-3xl w-[650px]">
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
  <span class="text-sm text-red-600 hidden" id="error">News Photo is required</span>
</div>

    
    </form>
  </div>
</div>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>  
                        </div>
                    <div>
                    <table className='w-full'>
                                <tr className='text-sky-600 h-10'>
                                    <th className='w-48 text-center pl-3'>ID</th>
                                    <th className='w-48 text-left pl-3'>Category</th>
                                    <th className='w-32 text-left'>Level</th>
                                    <th className='w-32 text-left'>Title</th>
                                    <th className='w-32 text-left'>Headlines</th>
                                    <th className='w-32 text-left'>Author</th>
                                    <th className='text-left'>Created Date</th>
                                    <th className='text-left'>
                                        <div className='flex justify-between'>
                                            <div>Photo</div>
                                            <div>Actions</div>
                                        </div>
                                    </th>
                                </tr>
                                {
                                  Data.map((item, index) => (
                                  <tr key={index} className={`${index % 2 === 0 ? 'bg-sky-50' : 'bg-white'} text-sky-800 text-xs h-8 rounded-xl`}>
                                    <td className="text-center">{item.id}</td>
                                    <td className='pl-3'>{item.Company}</td>
                                    <td>{item.StartDate}</td>
                                    <td>{item.EndDate}</td>
                                    <td>{item.StartDate}</td>
                                    <td>{item.EndDate}</td>
                                    <td>{item.Remark}</td>
                                    <td className='pr-4'>
                                        <div className='flex justify-between'>
                                            <div>{item.Remark}</div>
                                            <div className='flex space-x-3'>
                                                <div><BiEdit className='text-[23px] text-green-500' /></div>
                                                <div><AiFillDelete className='text-[23px] text-red-500' /></div>
                                            </div>
                                        </div>
                                    </td>
                                  </tr>
                                  ))
                                }
                                
                                
                            </table>
                        
                        </div>
                    </div>
            </div>
        </div> 
            </div>
        </div>
        </div>
  )
}
