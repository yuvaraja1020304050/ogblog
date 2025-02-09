import React, { useState, createContext, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Sidebar from './components/Sidebar';

export const BlogContext = createContext();

function App() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/Read');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setStore(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <BlogContext.Provider value={{ store, setStore }}>
      <Header />
      <div className='flex w-screen bg-green-100 h-screen'>
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </BlogContext.Provider>
  );
}

export default App;
