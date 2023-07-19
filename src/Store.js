   import {configureStore } from "reduux/toolkit"
import rootReduser from "./Reducers/Reducer" 
 export default configureStore({
    reducers:{
        user:rootReduser
    }

 })