import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Readcomponent = ({ item }) => {
  const [num, setNum] = useState(0); 
console.log(item._id);
  function handleLike() {
    setNum((prevNum) => prevNum + 1); 
  }

  return (
    <div className='h-auto border-2 w-80 p-4 m-4 rounded-lg shadow-lg bg-white'>
      {/* Title */}
      <h2 className='text-xl font-bold text-blue-700'>{item.title || "No Title"}</h2>

      {/* Description */}
      <p className='text-gray-700'>{item.description || "No description available"}</p>

      {/* Author Info */}
      <p className='text-sm text-gray-500'>By: {item.authorname || "Unknown"}</p>
      
      {/* Timestamp (consider replacing item.id with proper timestamp) */}
      <p className='text-xs text-gray-400 my-2'>Created At: {item.id}</p>

      {/* Actions */}
      <div className='flex items-center justify-between mt-4'>
        
        {/* Show Button */}
        <Link className='border p-2 rounded-lg bg-yellow-300 hover:bg-yellow-400 transition' to={`/one/${item._id}`}>
          Show
        </Link>

        {/* Like Button */}
        <button
          className='border px-3 py-1 bg-green-100 text-black rounded-full hover:bg-green-600 transition'
          onClick={handleLike}
          aria-label="Like this post"
        >
          👍 {num}
        </button>
      </div>
    </div>
  );
};

export default Readcomponent;
