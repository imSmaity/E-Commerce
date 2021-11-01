import Product from "../../../../../Components/Layout/ItemLayout/Product";
import { useState, useEffect } from "react";

export const Mp3=()=>{
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
    else if(data[2] != undefined){
        console.log(data)
        return <Product data={data[2]}/>;
    }
    else{
        return <div>Loading...</div>
    }
}