import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { createData } from './api';
import { Link } from 'react-router-dom'

export default function NewsForm() {
    const [formData, setFormData] = useState({
        Category: '',
        Title: '',
        Headlines: '',
        Author: '',
        Photo: '',
        Content: '',
      });
    
      const createDataMutation = useMutation(createData);
    
      const handleChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await createDataMutation.mutateAsync(formData)
          console.log('News Created Successfully!');
          setFormData({
            Category: '',
            Title: '',
            Headlines: '',
            Author: '',
            Photo: '',
            Content: '',
          });
        } catch (error) {
          console.error(error.message);
        }
      };
  return (
    <div>
         {createDataMutation.isError && (
      <div className='bg-red-400 rounded text-center text-white py-2 my-2 text-[20px]'>Error: {createDataMutation.error.message}</div>
    )}
    {createDataMutation.isSuccess && (
        <div className='bg-green-500 p-2 rounded'>  
            <div className='bg-white justify-center rounded text-green-500 flex text-[30px] font-bold'>
                News Created Successfully!
            </div>
</div>
    )}
    <div class="mx-auto px-6 py-3 bg-white border-0 shadow-lg sm:rounded-3xl ">
    <form id="form" novalidate onSubmit={handleSubmit}>
    

      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          name="Title"
          id="Title"
          value={formData.Title}
          onChange={handleChange}
          placeholder="Enter News Title"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <span class="text-sm text-red-600 hidden" id="error">News Title is required</span>
      </div>
      <div class="relative z-0 w-full mb-5 ">
        <input
          type="text"
          name="Headlines"
          id="Headlines"
          value={formData.Headlines}
          onChange={handleChange}
          placeholder="Enter Headlines"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <span class="text-sm text-red-600 hidden" id="error">Headlines is required</span>
      </div>
      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          name="Author"
          value={formData.Author}
          onChange={handleChange}
          placeholder="Enter Author"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <span class="text-sm text-red-600 hidden" id="error">Author is required</span>
      </div>

      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          name="Photo"
          value={formData.Photo}
          onChange={handleChange}
          placeholder="Enter News Photo"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <span class="text-sm text-red-600 hidden" id="error">News Photo is required</span>
      </div>

      <div class="relative z-0 w-full mb-5">
              <select 
              name='Category'
              id='Category'
              value={formData.Category}
              onChange={handleChange}
              className='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200'>
                  <option>Entertainment</option>
                  <option>Business</option>
                  <option>Sport</option>
                  <option>Health</option>
                  <option>Lifestyle</option>
              </select>
        <span class="text-sm text-red-600 hidden" id="error">News Category is required</span>
      </div>
      <div class="relative z-0 w-full mb-5">
          <textarea 
          name='Content'
          id='Content'
          value={formData.Content}
          onChange={handleChange}
          placeholder='Enter full News Content' 
          className='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200'>
              
          </textarea>
      </div>
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
      type="submit"
      disabled={createDataMutation.isLoading}
      
    >
    {createDataMutation.isLoading ? 'Submitting...' : 'Submit'}
    </button>
   
  </div> 
      </form>
        </div>
        </div>
  )
}
