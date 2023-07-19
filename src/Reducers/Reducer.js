 const initalState = {
    list:[]
 }
const Reducer =( state=initalState,action)=>{
    
        switch(action.type){
            case "ADD": 
            const{id,data}= action.payload;
         return{
            ...state,
            data:[
                ...state.list,
                {
                    id:id,
                    data:data
                    
            }]
         }

         
            
 default :return state;
         
        }
    


 }
 export default Reducer;