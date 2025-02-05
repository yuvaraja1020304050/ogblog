import React from 'react';
import Readcomponent from '../components/Readcomponent';
const Read = () => {
  const storedData = JSON.parse(localStorage.getItem('store')) || [];
  console.log(storedData)

  return (
    <div className="flex flex-wrap gap-6 p-6 grid grid-cols-4">
      {storedData.length > 0 ? (
        storedData.map((item) => (
          <Readcomponent key={item.id} item={item} />
        ))
      ) : (
        <h2 className="text-center text-gray-500">No Blogs Found</h2>
      )}
    </div>
  );
};

export default Read;
