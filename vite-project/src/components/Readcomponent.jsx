import React from 'react'
import {Link} from 'react-router-dom'
const Readcomponent = (props) => {
    const {item}=props
    console.log(item)
  return (
    
        <div className='h-auto border-2 w-80 p-4 m-4 rounded-lg shadow-lg bg-white'>
          <h2 className='text-xl font-bold text-blue-700'>{item.title || "nothing"}</h2>
          <p className='text-gray-700'>{item.description || "not anything"}</p>
          <p className='text-sm text-gray-500'>By: {item.authorname || "Unknown"}</p>
          <p className='text-xs text-gray-400 mt-1'>Created At: {new Date(item.id || 0).toLocaleString()}</p>
          <Link to={`/one/${item.id}`}>show </Link>
        </div>
      
   
    
  )
}

export default Readcomponent