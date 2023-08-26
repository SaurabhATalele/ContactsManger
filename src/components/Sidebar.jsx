import React from 'react'
import "../Styles/Sidebar.css"
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
<>
<div id="sidebar">
    

      <ul>

        <li className="sidebar-li">
        
          <Link to="/" className="list">
            Contacts
          </Link>
        
        </li>
        
        <li className="sidebar-li">
        
          <Link to={"/chart"} className="list">
            Charts
          </Link>
        
        </li>

     </ul>
     </div>


     
</>
  )
}

export default Sidebar