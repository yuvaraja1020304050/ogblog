import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Body from './components/Body'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <Header/>
      <div className='flex w-screen bg-green-100 h-screen'>
      <Sidebar/>
      <Body/>
      </div>
      <Footer/>
    </>
  )
}

export default App
