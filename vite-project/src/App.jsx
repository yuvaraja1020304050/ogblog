import React, { useState, createContext, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Sidebar from './components/Sidebar';

export const createtheblog = createContext();

function App() {
 
  const [store, setstore] = useState(() => {
    const storedData = localStorage.getItem('store');
    return storedData ? JSON.parse(storedData) : []; 
  });

  useEffect(() => {
    
    if (store.length > 0) {
      localStorage.setItem('store', JSON.stringify(store));
    }
  }, [store]);

  return (
    <createtheblog.Provider value={{ store, setstore }}>
      <Header />
      <div className='flex w-screen bg-green-100 h-240'>
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </createtheblog.Provider>
  );
}

export default App;
