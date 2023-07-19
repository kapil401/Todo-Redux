import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { loadpost } from "../Store";
 const Post =()=>{
    const dispatch = useDispatch();
     const posts = useSelector((state)=>state.list)
      useEffect(()=>{
         dispatch(loadpost());
      },[dispatch])
 }
 return(
   <div>
      {
         posts.map((posts)=>{
return(
   <li key={posts.id}>{Post.title}</li>
)
          })
      }
   </div>
 )
  export default Post;