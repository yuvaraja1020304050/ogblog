import React from 'react'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
  const navigate=useNavigate();
  function handleCreate(){
    console.log("from sidebar")
    navigate('/')
  }
  function handleRead(){
    navigate('/Read')
  }
  return (
    <div className='container bg-amber-100 w-70'>
        <button className='rounded-full border-2 my-18 mx-13 w-40 h-10' onClick={handleCreate}>➕ADD POST</button>
        <hr></hr>
        <div>
            <button className='rounded-full border-2 my-8 mx-13 w-40 h-10' onClick={handleRead} >🔍Explore</button>
            <button className='rounded-full border-2 my-6 mx-13 w-40 h-10'>📒MY POSTS</button>
            <button className='rounded-full border-2 my-6 mx-13 w-40 h-10'>📃UPDate</button>
            <button className='rounded-full border-2 my-6 mx-13 w-40 h-10'>🗑️Delete</button>
            <button className='rounded-full border-2 my-6 mx-13 w-40 h-10'>🪟View</button>
        </div>
    </div>
  )
}

export default Sidebar