import React, { useEffect, useState } from 'react';
import Readcomponent from '../components/Readcomponent';

const Read = () => {
  const [storedData, setStoredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/Read'); // Adjust URL if needed
        if (!response.ok) throw new Error("Failed to fetch blogs");

        const data = await response.json();
        setStoredData(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Error fetching blogs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-6 p-6 grid grid-cols-4">
      {loading ? (
        <h2 className="text-center text-blue-500">Loading...</h2>
      ) : error ? (
        <h2 className="text-center text-red-500">{error}</h2>
      ) : storedData.length > 0 ? (
        storedData.map((item, index) => (
          <Readcomponent key={item.id || index} item={item} />
        ))
      ) : (
        <h2 className="text-center text-gray-500">No Blogs Found</h2>
      )}
    </div>
  );
};

export default Read;
