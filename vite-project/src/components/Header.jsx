import React from 'react';
import { FaBars, FaQuestionCircle, FaTh } from 'react-icons/fa';
import logo from '../assets/blogger-logo.avif';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="h-16 w-full bg-white border-y border-gray-400 flex items-center justify-between px-4">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <button className="text-gray-600 text-2xl p-2 hover:bg-gray-200 rounded-full">
          <FaBars />
        </button>
        <img src={logo} className="h-8" alt="Blogger Logo" />
      </div>

      {/* Search Bar */}
      <div className="flex-grow max-w-xl">
        <input
          type="text"
          className="border-2 h-10 w-full px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search post..."
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Help Button */}
        <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          <FaQuestionCircle size={20} />
        </button>

        {/* Grid View Button */}
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-300">
          <FaTh size={20} />
        </button>

        {/* Home Button */}
        <button
          className="p-2 text-2xl hover:bg-gray-200 rounded-full transition"
          onClick={() => navigate('/')}
        >
          🏠
        </button>

        {/* User Profile */}
        <button className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-sm font-bold hover:bg-red-200 transition">
          U
        </button>
      </div>
    </div>
  );
};

export default Header;
