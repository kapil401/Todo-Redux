 import {configureStore} from "@redux/toolkit"
  import reducer from "./Post"
  import api from "."
   export default function store (){
    return configureStore({
        reducer,
        middleware:[... getDefaultMiddleware(),api]
    })
   }