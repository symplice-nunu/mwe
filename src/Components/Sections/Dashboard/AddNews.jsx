import React from 'react';
import Sidebar from './Sidebar'
import Navbar from "./Navbar"
import NewsForm from './NewsForm';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

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
                    <QueryClientProvider client={queryClient}>
                      <NewsForm />
                    </QueryClientProvider>
                    </div>
                  </p>
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
