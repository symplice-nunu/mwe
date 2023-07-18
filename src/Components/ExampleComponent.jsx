import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const ExampleComponent = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(async (newData) => {
    const response = await axios.post('http://localhost:5000/api/v1/news', newData);
    return response.data;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('example');
    },
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newData = Object.fromEntries(formData);
    mutation.mutate(newData);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="mx-auto px-6 py-3 bg-white border-0 shadow-lg sm:rounded-3xl">
          <div id="form" novalidate>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="title"
                placeholder="Enter News Title"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <span className="text-sm text-red-600 hidden" id="error">News Title is required</span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="headlines"
                placeholder="Enter Headlines"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <span className="text-sm text-red-600 hidden" id="error">Headlines is required</span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="author"
                placeholder="Enter Author"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <span className="text-sm text-red-600 hidden" id="error">Author is required</span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="photo"
                placeholder="Enter News Photo"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <span className="text-sm text-red-600 hidden" id="error">News Photo is required</span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <select className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200">
                <option>Entertainment</option>
                <option>Business</option>
                <option>Sport</option>
                <option>Health</option>
                <option>Lifestyle</option>
              </select>
              <span className="text-sm text-red-600 hidden" id="error">News Category is required</span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <textarea
                placeholder="Enter full News Content"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              ></textarea>
            </div>
          </div>
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
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExampleComponent;
