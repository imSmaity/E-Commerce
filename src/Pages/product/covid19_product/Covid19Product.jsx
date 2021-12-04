
import { Link,useRouteMatch } from 'react-router-dom';
import ProductData from '../../../Api/ProductData';
import { Footer, Loading } from '../../../Components';
import Header from '../../../Components/header/Header';
import Navbar from '../../../Components/navbar/Navbar';
import './covid19Product.css'

const Covid19Product=()=>{
    let {url}=useRouteMatch()
    const apiData=ProductData()

    return(
        <>
            <div className="row">
                <div className="col-12">
                    <Header/>
                </div>
                <div className="col-12">
                    <Navbar/>
                </div>
                <div className="col-12 marginTop">
                    <h3>Equipment for covid-19</h3>
                    <div className="row container-fluid">
                    {
                        !apiData.isLoaded?
                        <Loading/>:
                        apiData.data.covid19_product.map((val,index)=>{
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
                </div>
                <div className="col-12">
                    <Footer/>
                </div>
            </div>
            
        </>
    );
}

export default Covid19Product;