import React from 'react'
import '../Styles/Create.css'  
import axios from 'axios';     

const Create = () => {

  const createContact = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post("https://contacts-app-api.vercel.app/",{
        firstName: e.target[0].value,
        lastName: e.target[1].value,
        phone: e.target[2].value,
        status: e.target[3].value,
      });
      console.log(response);
      alert("Contact Created Successfully");
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className='form-style'>
        <form onSubmit={createContact}>
            <h1>CREATE CONTACT</h1>
           {/* create fields with lables the fields are firstname,lastname,phone and active or inactive selector */}
            <label>First Name</label>
            <input type='text' placeholder='First Name'/>
            <label>Last Name</label>
            <input type='text' placeholder='Last Name'/>
            <label>Phone</label>
            <input type='text' placeholder='Phone'/>
            <label>Status</label>
            <select>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select>
            <button className='btn'>Submit</button>
            
        </form>
    </div>
  )
}

export default Create