import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function Notfound() {
  const [second,setSecond] = useState(0)
   const [minute,setMinute] = useState(0);
   
  const navigates = useNavigate()
  const submit =()=>{
   navigates('/')
  }
  var timmer;
   useEffect(()=>{
     timmer = setInterval(()=>{
      setSecond(second+1)
      if(second===59){
        setMinute(minute+1)
         setSecond(0);
      }
     },1000)
      return()=> clearInterval(timmer)
   })

   const stop =()=>{
    clearInterval(timmer)
   }
    const reset=()=>{
      setMinute(0);
      setSecond(0)
    }
 return (
   <div>
     <>
     <label>email</label>
     <input type="text" placeholder='Email' />
     <h1>{minute<10?"0"+minute:minute}:{second<10?"0"+second:second}</h1>
     <button on onClick={reset}> reset</button>
     <button on onClick={stop}> stop</button>
     </>
   </div>
 )
}

export default Notfound
