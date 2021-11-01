import Product from "../../../../../Components/Layout/ItemLayout/Product";
import { useState, useEffect } from "react";

export const Mp1=()=>{
    const [data,setData]=useState([]);
    const [isLoaded,setIsLoaded]=useState(false);

    useEffect(()=>{
        fetch("http://localhost:8080/admin/json-data")
        .then(res=>res.json())
        .then(
            (result)=>{
            setIsLoaded(true);
            setData(result);
            },
        
        )
    },[])

    if(!isLoaded){
        return <div>Loading...</div>
    }
    else if(data[0] != undefined){
        console.log(data)
        return <Product data={data[0]}/>;
    }
    else{
        return <div>Loading...</div>
    }
}