import React, { useEffect, useState } from 'react'
import '../Styles/Create.css'
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
const Edit = () => {
  const navigate = useNavigate();

  const {firstName,lastName,phone,status} = useParams();
  const  [FirstName,setFirstName] = useState("");
  const  [LastName,setLastName] = useState("");
  const  [Phone,setPhone] = useState("");
  const  [Status,setStatus] = useState("");
  
  useEffect(()=>{
    // console.log(first,last,Phone,Status);
    setFirstName(firstName);
    setLastName(lastName);
    setPhone(phone);
    setStatus(status);
  },[])


  const editContact = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.put("http://localhost:5000/update",{
        firstName: FirstName,
        lastName:LastName,
        phone: Phone,
        status: Status,
        oldPhone: phone
      });
      console.log(response);
      alert("Contact Edited Successfully");
    }catch(error){
      console.log(error);
    }
  }


  const deleteContact = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.delete("http://localhost:5000/delete",{
        data:{
          phone: Phone
        }
      });
      console.log(response);
      alert("Contact Deleted Successfully");
      navigate("/")
    }catch(error){
      console.log(error);
    }
  }

  return (
    <>
         <div className='form-style'>
        <form onSubmit={editContact}>
            <h1>EDIT CONTACT</h1>
           {/* create fields with lables the fields are firstname,lastname,phone and active or inactive selector */}
            <label>First Name</label>
            <input type='text' placeholder='First Name' value={FirstName} onChange={(e)=>{
              setFirstName(e.target.value);
            }}/>
            <label>Last Name</label>
            <input type='text' placeholder='Last Name' value={LastName} onChange={(e)=>{setLastName(e.target.value)}}/>
            <label>Phone</label>
            <input type='text' placeholder='Phone' value={Phone} onChange={(e)=>{
              setPhone(e.target.value);
            }}/>
            <label>Status</label>
            <select value={Status} onChange={(e)=>{
              setStatus(e.target.value);
            }}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select>
            <button className='btn'>Edit</button>
            
        </form>
            <button className='delete-btn btn' onClick={deleteContact}>Delete</button>
    </div>
    </>
  )
}

export default Edit