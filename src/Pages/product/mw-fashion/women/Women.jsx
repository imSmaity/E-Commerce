// import dataBase from '../../dataBase';

import '../menWomenFashion.css';
import { Link } from 'react-router-dom';
const dataBase=[""];
const Women=()=>{
    return(
        <>
            <div className="row container-fluid">

            {
                dataBase.women.map((val)=>{
                    return(
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={val.key}>
                    <center>
                        <div className="card rounded-0 cardStyle">
                            <div className="card-img"><Link to="/"><img src={val.img} className="imgSize" alt="..." /></Link></div>
                            <div className="card-title"><Link to="/" className='link'>{val.title}</Link></div>
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

export default Women;