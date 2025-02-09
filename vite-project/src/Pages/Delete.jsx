import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Delete = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDelete = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`http://localhost:3000/delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete');

      navigate('/Read'); 
    } catch (err) {
      setError('Error deleting blog. Please try again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-6">Delete Blog</h1>

      {error && <p className="text-center text-red-500 mb-4">{error}</p>}

      <p className="text-lg text-gray-700 text-center mb-6">
        Are you sure you want to delete this blog?
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={handleDelete}
          className={`px-6 py-2 text-white rounded-lg transition ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
          }`}
          disabled={loading}
        >
          {loading ? 'Deleting...' : 'Yes, Delete'}
        </button>

        <button
          onClick={() => navigate('/Read')}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Delete;
