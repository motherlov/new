import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
export default function ListData() {
    const token= localStorage.getItem("token");
    console.log(token);
    const [products, setProducts] = useState([]);
    const FetchData =()=>{
      axios.get('https://corefitserver.onrender.com/getblog',{headers:{'x-access-token':`${token}` }}
      ).then((res)=>{
        setProducts(res.data.data);
      }).catch((error)=>{
        console.error(error);
      }) }
    useEffect(()=>{
      FetchData();
    },[])
  console.log(products);
  return (
    <div>
        <h1>Dashboard</h1>
       <button> <Link to="/add">Booking</Link></button>
  <table className="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Image</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
        {products && products.map((product,index)=>(
      <tr>
        <th scope="row">{++index}</th>
        <td>{product.title}</td>
        <td>{product.subtitle}</td>
        <td> <img src={product.image.replace(/\\/g, '/')}  style={{ maxWidth: '200px' }} /></td>
        <td>
          <Link to={`/getblogdetails/${product._id}`}>view</Link>
        </td>
      </tr>
      ))}
    </tbody>
  </table>
</div>

  )
}
