import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Create from '../Pages/Create';
import Read from '../Pages/Read';
import Readcomponent from './Readcomponent';
import Singlecomponent from './Singlecomponent';
import Update from '../Pages/Update';
import Delete from '../Pages/Create';
const Body = () => {
  return (
    <div >
       <Routes>
        <Route index element={<Create/>}></Route>
        <Route  path='/Read' element={<Read/>}></Route>
        <Route  path='one/:id' element={<Singlecomponent/>}></Route>
        <Route path='/Update/:id' element={<Update/>}></Route>
        <Route path='/Delete/:id' element={<Delete/>}></Route>

       </Routes>
    </div>
  )
}

export default Body