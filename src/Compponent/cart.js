import React from 'react'
import './style.css'

function Cart({blogs,key}) {
  return (
    <div  className='blog'>
      <img src={ blogs.image} width="200" height="200" />
      <h2>
        {blogs.title}
      </h2>
      <p>{blogs.description}</p>
    </div>
  )
}

export default Cart
