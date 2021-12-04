import { PriceDetails } from "../../../PriceDetails/PriceDetails"
import { Address } from "./Address"
import './productBuyPage1.css'
import Header from '../../../header/Header'
import Navbar from "../../../navbar/Navbar";
import Footer from '../../../footer/Footer'
import { OrderingItem } from "./orderingItem/OrderingItem";
import { Link,useRouteMatch } from "react-router-dom";

export const ProductBuyPage1=()=>{
    const {url}=useRouteMatch()
    return(
        <div className="row">
            <div className="col-12"><Header/></div>
            <div className="col-12"><Navbar/></div>

    
            <div className="col-12 mtord">
                <Address/>
            </div>
            <div className="col-8">
                <OrderingItem/>
                <div>
                    <Link to={`${url}/payment_options`}><button type="button" className="btn btn-primary">Continue</button></Link>
                </div>
            </div>
            <div className="col-4">
                <PriceDetails/>
            </div>
            <div className="col-12"><Footer/></div>
        </div>
    )
}