import React  from 'react'
import {useNavigate} from 'react-router-dom'

function Navbar() {
   const navigates = useNavigate()
   const submit =()=>{
    navigates('/Notfound')
   }
  return (
    <div>
      <>
      <label>email</label>
      <input type="text" placeholder='Email' />
      <button on onClick={submit}> submit</button>
      </>
    </div>
  )
}

export default Navbar
