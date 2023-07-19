import React, { useState  } from 'react'
import Reducer from './Reducers/Reducer';
  import { Add,Delet,Submit } from './Action/action';
  import {useDispatch,useSelector} from 'react-redux'
 
function Demo() {
    const[demo,setDemo] =useState ('');
    const change =(e)=>{
        setDemo(e.target.value)
    }
     const dispatch = useDispatch();
      const list = useSelector ((state)=>state.Reducer.list)
  return (
    <>
    <div>
    <h1>TOdo List</h1>
    <input text="text" value={demo} onChange={change}></input><br />
    <button onClick ={()=>dispatch(Add(demo),setDemo(''))}>+</button>
    {/* <button onClick ={()=>dispatch(Add(demo))}>check List</button> */}
    </div>
<div>
        {
            list.map((eve)=>{
                return(
                    <div key={eve.id}>
                    <h1>{eve.data}</h1>
                    <button onClick ={()=>dispatch(Delet(demo),setDemo(''))}>+</button>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Demo
