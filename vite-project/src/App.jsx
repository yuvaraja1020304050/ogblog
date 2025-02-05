import React, { useState, createContext,useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Sidebar from './components/Sidebar';

export const createtheblog = createContext();

function App() {
  const [store, setstore] = useState([
    {
      "title": "Exploring the Universe",
      "description": "A deep dive into the mysteries of space and the cosmos.",
      "authorname": "John Doe",
      "image": "https://example.com/space-image.jpg",
      "reference": "https://space-references.com",
      "id": 1675507200000
    },
    {
      "title": "React Basics",
      "description": "Understanding the core concepts of React and how to build your first app.",
      "authorname": "Jane Smith",
      "image": "https://example.com/react-image.jpg",
      "reference": "https://reactjs.org",
      "id": 1675420800000
    },
    {
      "title": "Mastering Python",
      "description": "An in-depth tutorial on Python programming for beginners.",
      "authorname": "Samuel Lee",
      "image": "https://example.com/python-image.jpg",
      "reference": "https://python.org",
      "id": 1675334400000
    },
    {
      "title": "The Art of Web Design",
      "description": "A guide to understanding modern web design principles and tools.",
      "authorname": "Sarah Williams",
      "image": "https://example.com/design-image.jpg",
      "reference": "https://webdesign.com",
      "id": 1675248000000
    }
  ]);

  useEffect(()=>{
    localStorage.setItem('store', JSON.stringify(store));
  },[store])

  return (
    <createtheblog.Provider value={{ store, setstore }}>
      <Header />
      <div className='flex w-screen bg-green-100 h-full'>
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </createtheblog.Provider>
  );
}

export default App;
