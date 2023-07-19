import React, { useEffect, useState } from 'react'
import Cart from './cart'
// import axios from 'axios'

function Product() {
  const[blogs,setBlogs] = useState([])
   const [show,setShow] = useState([])
  useEffect (()=>{
     const fetchdata = async()=>{
      const dataa =await  fetch('https://fakestoreapi.com/products')
      const res = await dataa.json();
      setBlogs (res)
      
      setShow(res)
      console.log(res)

     }
  // const data =await  axios.ger('https://fakestoreapi.com/products/1')
    // console.log(data)
  //  setBlogs (res)
 fetchdata();
  },[])
   const handle =(e)=>{
    setBlogs(show.filter(r=>r.title.toLowerCase().includes(e.target.value.toLowerCase())))
   }
    
  return (
    <div>
  <h1>Products</h1>
  
       <input text ="text" onChange={handle} />
        {
          blogs.map((blogs,index)=>(
            <Cart blogs={blogs} key ={index}/>

          ))
        }
       
    </div>
  )
}

export default Product ;
