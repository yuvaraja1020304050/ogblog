import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Readcomponent = (props) => {
  const { item } = props;
  const [num, setnum] = useState(0); 

 
  function handleadd() {
    setnum((prevnum) => prevnum + 1); 
  }

  return (
    <div className='h-auto border-2 w-80 p-4 m-4 rounded-lg shadow-lg bg-white'>
     
      <h2 className='text-xl font-bold text-blue-700'>{item.title || "nothing"}</h2>
      <p className='text-gray-700'>{item.description || "not anything"}</p>
      <p className='text-sm text-gray-500'>By: {item.authorname || "Unknown"}</p>
      <p className='text-xs text-gray-400 my-2'>Created At: {new Date(item.id || 0).toLocaleString()}</p>

     
      <div className='ml-10 mt-5'>
        
        <Link className='border-3 p-1 rounded-lg bg-yellow-300 mr-10' to={`/one/${item.id}`}>
          Show
        </Link>

       
        <button
          className='border-1 px-2 py-1 bg-green-100 text-white rounded-full hover:bg-green-600 transition'
          onClick={handleadd}
        >
          👍
        </button>

      
        <p className='ml-26'>{num}</p>
      </div>
    </div>
  );
};

export default Readcomponent;
