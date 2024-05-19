import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
export default function Details() {
    const token= localStorage.getItem("token");
    console.log(token);
    const [products, setProducts] = useState([]);
 const {id} = useParams();
    const FetchData =()=>{
      axios.get(`https://corefitserver.onrender.com/getblogdetails/${id}`,{headers:{'x-access-token':`${token}`}
      }).then((res)=>{
        setProducts(res.data.data);
      }).catch((error)=>{
        console.error(error);
      })}
    useEffect(()=>{
      FetchData();
    },[])
  console.log(products);
  return (
    <div>
  <table className="table table-dark table-striped">
    <thead>
      <tr>
      
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Content</th>
        
      </tr>
    </thead>
    <tbody>
        
      <tr>
       
        <td>{products.title}</td>
        <td>{products.subtitle}</td>
        <td>{products.content}</td>
       
      </tr>
      
    </tbody>
  </table>
</div>

  )
}
