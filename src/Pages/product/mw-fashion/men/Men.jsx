
import '../menWomenFashion.css';
import { Link,useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Men=()=>{
    const [data,setData]=useState([]);
    const [isLoaded,setIsLoaded]=useState(false);
    let {url}=useRouteMatch();

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

   
    if(!isLoaded)
    {
        return <div>Loading...</div>
    }
    else{

        return(
            <>
                <div className="row container-fluid">

                {
                    data.map((val,index)=>{
                        return(
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                            <center>
                                <div className="card rounded-0 cardStyle"> 
                                    <div className="card-img"><Link to={`${url}/${val.productId}`} ><img src={val.imageLink} className="imgSize" alt="..." /></Link></div>
                                    <div className="card-title"><Link to={`${url}/${val.productId}`} className='link'>{val.productName}</Link></div>
                                    <div className="card-subtitle"><h5>₹ {val.price}</h5></div>
                                </div>
                            </center>
                        </div>
                        );
                    }) 
                }
                
                </div>
            </>
        );
    }
};

export default Men;
