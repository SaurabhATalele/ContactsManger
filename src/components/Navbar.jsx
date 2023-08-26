import React from 'react'
import contacts from './th.jpeg'
import'../Styles/Navbar.css'

const Navbar = () => {
  return (
  <>
    <div className='navbar'>
       <img className="img" src={contacts}alt="img" />
       <h1>Contact Management App</h1>
    </div>
  </>
  )
}

export default Navbar