import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
     const [user,setUser] =useState();
     const token = localStorage.getItem("token");
     console.log(token);
     const FetchData =()=>{
      axios.get("https://wtsacademy.dedicateddevelopers.us/api/user/profile-details",{
         headers:{
          'x-access-token':`${token}`
         }}).then((res)=>{
      console.log(res.data);
      setUser(res.data.data);
    }).catch((error)=>{
      console.error(error);
    })}
     useEffect(()=>{
      FetchData();
     },[])
     console.log(user)
  return (
    <div>
        <h1>Dashboard</h1>
        <Link to="/add">Create Data</Link>
       { token ? (
        <>
        {/* <p>First Name: {user.first_name}</p>  */}
         {/* <p>Last Name: {user.last_name}</p>
        <p>Email: {user.email}</p> */}
        </>
       ):(
        <>
        <p>Data not fetch</p>
        </>
       )
      }
        

  

    </div>


  )
}
