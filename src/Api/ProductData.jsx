import { useState,useEffect } from "react"
import axios from 'axios'

export default function ProductData(){
    const [data,setData]=useState([]);
    const [isLoaded,setIsLoaded]=useState(false);

    useEffect(()=>{
        axios.get(`https://${process.env.REACT_APP_API_PATH}/admin/product_data`)
        .then(
            (result)=>{
                setData(result.data);
                setIsLoaded(true);
            },
        
        )
    },[])

    return {data:data,isLoaded:isLoaded}
}