import React from 'react'
import { FaBars ,FaQuestionCircle,FaTh,FaStar } from 'react-icons/fa'
import logo from '../assets/blogger-logo.avif';

const Header = () => {
  return (
    <div className='h-16 w-full bg-white border-y border-gray-400 flex  justify-between'>
        <div className='flex'>
        <button className="text-gray-600 text-3xl p-3">
        <FaBars />
        </button>
        <img src={logo} className='h-8 m-4'  alt="not shown"/>
        </div>
        <input type='text' className='border-2 h-12 m-2 w-80 rounded-full' placeholder='   Search post'/>
        <div className='flex gap-6'>
        <button 
           className="m-3 p-2 bg-blue-500 text-white rounded-full h-10  hover:bg-blue-600">
      <FaQuestionCircle size={24} />  
      </button>
      <button
      className=" p-2 bg-gray-100 rounded-full hover:bg-gray-400 h-10 m-3">
      <FaTh size={24} /> 
    </button>
        </div>
        <div>
            <button>
            <div className='h-10 w-10 bg-red-100 m-3'>user</div>
            </button>

        </div>

    </div>
  )
}

export default Header