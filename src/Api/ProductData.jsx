import { useState,useEffect } from "react"

export default function ProductData(){
    const [data,setData]=useState([]);
    const [isLoaded,setIsLoaded]=useState(false);

    useEffect(()=>{
        fetch("http://localhost:8080/admin/product_data")
        .then(res=>res.json())
        .then(
            (result)=>{
                setData(result);
                setIsLoaded(true);
            },
        
        )
    },[])

    return {data:data,isLoaded:isLoaded}
}