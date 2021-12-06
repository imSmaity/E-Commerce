
import '../menWomenFashion.css';
import { Link,useRouteMatch } from 'react-router-dom';


const Women=({data})=>{
    
    let {url}=useRouteMatch();

    return(
        <>
            <h3 id="mansH">Styles for Women</h3> 
            <div className="row container-fluid">

            {
                data.map((val,index)=>{
                    return(
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                        <center>
                            <div className="card rounded-0 cardStyle"> 
                                <div className="card-img"><Link to={{pathname:`${url}/${val.productId}`,state:val}} ><img src={val.imageLink} className="imgSize" alt="..." /></Link></div>
                                <div className="card-title"><Link to={{pathname:`${url}/${val.productId}`,state:val}} className='link'>{val.productName}</Link></div>
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
};

export default Women;
