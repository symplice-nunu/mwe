import { useQuery } from 'react-query';
import axios from 'axios';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const Data = () => {
  const { data, isLoading, isError } = useQuery('fetchData', () =>
    axios.get('http://localhost:5000/api/v1/news').then(response => response.data)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <table className='w-full'>
        <thead>
          <tr className='text-sky-600 h-10'>
            <th className='w-48 text-center pl-3'>ID</th>
            <th className='w-48 text-left pl-3'>Category</th>
            <th className='w-32 text-left'>Level</th>
            <th className='w-32 text-left'>Title</th>
            <th className='w-32 text-left'>Headlines</th>
            <th className='w-32 text-left'>Author</th>
            <th className='text-left'>Created Date</th>
            <th className='text-center'>
              <div className='flex justify-between'>
                <div>Photo</div>
                <div>Actions</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-sky-50' : 'bg-white'} text-sky-800 text-xs h-8 rounded-xl`}
            >
              <td className='text-center' key={item.id}>{item.id}</td>
              <td className='' key={item.id}>{item.Category}</td>
              <td className='' key={item.id}>{item.Level}</td>
              <td className='' key={item.id}>{item.Title}</td>
              <td className='' key={item.id}>{item.Headlines}</td>
              <td className='' key={item.id}>{item.Author}</td>
              <td className='' key={item.id}>{item.created_at}</td>
              <td className='' key={item.id}>{item.Photo}</td>
              <td className='pr-4'>
                <div className='flex space-x-3'>
                  <div>
                    <BiEdit className='text-[23px] text-green-500' />
                  </div>
                  <div>
                    <AiFillDelete className='text-[23px] text-red-500' />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
