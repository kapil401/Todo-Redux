 const Api ={
    fetcapi:async()=>{
        const res = await fetch('https://fakestoreapi.com/products');
        const result =await res.json()
         return result;
    },
     fetchByid:async()=>{
        const res = await fetch ('https://fakestoreapi.com/products');
        const result = res.json()
        return result;

     },
      fetchbyname :async()=>{
        const res = await fetch('https://fakestoreapi.com/products');
         const result  = await res.json()
         return result.filter((product)=>product.title.toLowerCase().includes(query))


      }

}