import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Create() {
    const token= localStorage.getItem("token")
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [service_name, setService_name] = useState('');
    const [price,setPrice] = useState('');
    const navigate = useNavigate();
     const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://corefitserver.onrender.com/booking',{name,email,service_name,price},{
         headers: {
                'x-access-token':`${token}`
            } }
    ).then((res)=>{
        console.log("Booking create successfully",res.data);
        //navigate("/list");
    }).catch((error)=>{
  console.error(error);
    })
     }
  return (
    <div>
       <h1>Booking  Data</h1>
      <form>
       
        <label>
          Title:
          <input type="text" value={name} placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
        Service Name:
      <input type="text" value={service_name} placeholder='Enter service_name'onChange={(e) =>setService_name(e.target.value)} />
        </label>
        <br />
        <label>
        Price:
        <input type="number" value={price} placeholder='Enter price' onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>Booking</button>
      </form>

    </div>
  )
}
