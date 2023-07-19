import React, { useState } from 'react'

function Googlekeep() {
     const [note,setNote] = useState({title:'',content:""})
      const handle=(e)=>{
        const{name,value}=e.target
         setNote((pernote)=>{
            return{
            ...pernote,
            [name]:value
            }

         })
        
        console.log(note)

      }
  return (
    <>
    <div>
        <input  text="text"  onChange={handle} value={note.title}name='title' placeholder='text'></input><br></br>
        <textarea text="text" onChange={handle}  value={note.content}  name="content" placeholder='write the code'></textarea>
        <button>add</button>

    </div>
    </>
  )
}

export default Googlekeep
