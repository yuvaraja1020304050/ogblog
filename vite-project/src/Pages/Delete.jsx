import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createtheblog } from '../App'; // Import context API

const Delete = () => {
  const { id } = useParams(); 
  const { store, setstore } = useContext(createtheblog); 
  const navigate = useNavigate();

  const handleDelete = () => {
   
    const updatedStore = store.filter((blog) => blog.id !== Number(id));

   
    setstore(updatedStore);

    
    localStorage.setItem('store', JSON.stringify(updatedStore));

  
    navigate('/Read');
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-red-600 text-center mb-8">Delete Blog</h1>
      <div className="text-center">
        <p className="text-lg text-gray-700 mb-4">Are you sure you want to delete this blog?</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleDelete}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Yes, Delete
          </button>
          <button
            onClick={() => navigate('/Read')}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
