import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import'./App.css'
import { Routes,Route } from 'react-router-dom'
import Create from './components/Create'
import Edit from './components/Edit'
import Chart from './components/Chart'
const App = () => {
  return (
    <>
      <div className='app'>
        <Sidebar/>
        <div className='main'>
          <Navbar/>
   

          <Routes>
            <Route path="/" element={<Contact/>}/>
            <Route path="/Create" element={<Create/>}/>
            <Route path="/Edit/:firstName/:lastName/:phone/:status" element={<Edit/>}/>
            <Route path="*" element={<h1>Not Found</h1>}/>
            <Route path="/chart" element={<Chart/>}/>

             </Routes>
       
        </div>
      </div>
    </>
  )
}

export default App
