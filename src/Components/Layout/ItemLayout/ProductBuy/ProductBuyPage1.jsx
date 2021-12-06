import { PriceDetails } from "../../../PriceDetails/PriceDetails"
import { Address } from "./Address"
import Header from '../../../header/Header'
import Navbar from "../../../navbar/Navbar";
import Footer from '../../../footer/Footer'
import { OrderingItem } from "./orderingItem/OrderingItem";
import { Link,useRouteMatch,useLocation } from "react-router-dom";
import { getUserData } from "../../../../localStorage/localStorage";

export const ProductBuyPage1=()=>{
    const {url}=useRouteMatch()
    const pending_orders=getUserData().pending_orders

    return(
        <div className="row">
            <div className="col-12"><Header/></div>
            <div className="col-12"><Navbar/></div>

    
            <div className="col-12">
                <Address />
            </div>
            <div className="col-8">
                <OrderingItem pendingOrder={pending_orders}/>
                <div>
                    <Link to={`${url}/payment_options`}><button type="button" className="btn btn-primary float-end mt-2">Continue</button></Link>
                </div>
            </div>
            <div className="col-4">
                <PriceDetails pendingOrder={pending_orders}/>
            </div>
            <div className="col-12"><Footer/></div>
        </div>
    )
}